import qs from 'qs'
import axios from 'axios'
import { baseUrl } from '../meta/config'
import { requestBody } from '../meta/format'

const options = {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(requestBody),
    url: baseUrl
}

export const request = async () => {
    return await axios(options)
}