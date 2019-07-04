import * as qs from 'qs'
import { baseUrl } from '../meta/config'
import { requestBody } from '../meta/format'
import {AxiosRequestConfig} from "axios"

export const requestOptions: AxiosRequestConfig = {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(requestBody),
    url: baseUrl
}
