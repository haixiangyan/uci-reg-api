import 'babel-polyfill'
import axios from 'axios'
import cheerio from 'cheerio'
import {requestOptions} from './http/request'
import CourseParser from './parser/CourseParser'

axios(requestOptions)
    .then(response => {
        const dom: CheerioStatic = cheerio.load(response.data)
        const regParser = new CourseParser(dom)

        const courses = regParser.parse()
    })
