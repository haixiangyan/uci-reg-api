import axios, {AxiosRequestConfig} from 'axios'
import {baseUrl} from "../meta/config"

// Method to get course info
export const getSelectionPage = async () => {
    const options: AxiosRequestConfig = {
        method: 'GET',
        url: baseUrl
    }

    // Get response
    const { data } = await axios(options)
    return data
}
