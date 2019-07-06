import axios, {AxiosRequestConfig} from 'axios'
import qs from 'qs'
import {baseUrl} from "../config"
import {RequestBody} from "../types"

// Method to get course info
export const getCoursePage = async (requestBody: RequestBody) => {
    const options: AxiosRequestConfig = {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify(requestBody),
        url: baseUrl
    }

    // Get response
    const { data } = await axios(options)
    return data
}
