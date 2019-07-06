import axios, {AxiosRequestConfig} from 'axios'
import cheerio from 'cheerio'
import qs from 'qs'
import CourseParser from '../parser/CourseParser'
import {requestBody} from "../meta/format"
import {baseUrl} from "../meta/config"

// Method to get course info
export const getCoursePage = () => {
    const options: AxiosRequestConfig = {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify(requestBody),
        url: baseUrl
    }

    return axios(options)
        .then(response => {
            const dom: CheerioStatic = cheerio.load(response.data)
            const regParser = new CourseParser(dom)

            const courses = regParser.parse()
            return courses
        })
}
