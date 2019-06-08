// 控制生命周期和创建本级浏览器窗口
const { app, BrowserWindow } = require('electron')
const path = require('path')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.

class WindowControl {
    constructor() {
        this.mainWindow = null
        this.config = {
            width: 800,
            height: 600,
            show: false
        }
    }
    static loadConfig () {
        return 'http://localhost:9987/#/'
    }
    close () {
        this.mainWindow = null
    }
    create () {
        this.mainWindow = new BrowserWindow(this.config)
        let address = WindowControl.loadConfig()
        if (address.includes('http')) {
            this.mainWindow.loadURL(address)
        } else {
            this.mainWindow.loadFile(address)
        }
        this.mainWindow.webContents.openDevTools()
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