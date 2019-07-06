import axios, {AxiosRequestConfig} from 'axios'
import {baseUrl} from "../config"

// Method to get course info
export const getOptionPage = async () => {
    const options: AxiosRequestConfig = {
        method: 'GET',
        url: baseUrl
    }

    // Get response
    return await axios(options)
}
