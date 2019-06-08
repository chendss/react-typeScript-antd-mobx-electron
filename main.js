// 控制生命周期和创建本级浏览器窗口
const { app, BrowserWindow } = require('electron')
const path = require('path')
const { port } = require('./webpack/easy.config')

class WindowControl {
    constructor() {
        this.mainWindow = null
        this.config = {
            width: 800,
            height: 600,
            show: false
        }
    }
    static loadConfig (NODE_ENV) {
        let result = ''
        if (NODE_ENV === 'development') {
            result = `http://localhost:${port}/#/`
        }
        return result
    }
    static createWindow (config) {
        const NODE_ENV = process.env.NODE_ENV
        let address = WindowControl.loadConfig(NODE_ENV)
        let mainWindow = new BrowserWindow(config)
        if (NODE_ENV === 'development') {
            mainWindow.loadURL(address)
            mainWindow.webContents.openDevTools()
        } else {
            mainWindow.loadFile(address)
        }
        return mainWindow
    }
    close () {
        this.mainWindow = null
    }
    create () {
        this.mainWindow = WindowControl.createWindow(this.config)
        this.mainWindow.on('closed', () => {
            this.mainWindow = null
        })
        this.mainWindow.once('ready-to-show', () => {
            this.mainWindow.show()
        })
    }
}

const main = function () {
    const winControl = new WindowControl()
    app.on('ready', winControl.create)
    app.on('window-all-closed', function () {
        if (process.platform !== 'darwin') {
            app.quit()
        }
    })

    app.on('activate', function () {
        if (winControl.mainWindow === null) {
            winControl.create()
        }
    })
}

main()