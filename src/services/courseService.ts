import axios, {AxiosRequestConfig} from 'axios'
import qs from 'qs'
import {requestBody} from "../meta/format"
import {baseUrl} from "../meta/config"

// Method to get course info
export const getCoursePage = async () => {
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
