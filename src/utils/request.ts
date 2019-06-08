import axios from 'axios'

export const GET = async function (url, data): Promise<Object> {
    const result = await axios.get(url, {
        data
    })
    return result
}