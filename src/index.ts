import 'babel-polyfill'
import cheerio from 'cheerio'
import fs from 'fs'
import {getOptionPage} from './services/optionService'
import OptionParser from "./parser/OptionParser"
import {getCoursePage} from "./services/courseService"
import CourseParser from "./parser/CourseParser"
import {RequestBody} from "./types"


// const parser = new CourseParser({})
//
// parser.initialize().then(() => {
//     const courses = parser.parse()
//     console.log(courses)
// })

OptionParser.getInstance().then(parser => {
    const options = parser.parse()
    console.log(options)
})