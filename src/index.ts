import 'babel-polyfill'
import cheerio from 'cheerio'
import fs from 'fs'
import {getOptionPage} from './services/optionService'
import OptionParser from "./parser/OptionParser"
import {getCoursePage} from "./services/courseService"
import CourseParser from "./parser/CourseParser"
import {RequestBody} from "./types"


const parser = new CourseParser({})

parser.initialize().then(() => {
    const courses = parser.parse()
    console.log(courses)
})

// getOptionPage().then(response => {
//     const dom: CheerioStatic = cheerio.load(response.data)
//
//     const selectionParser = new OptionParser(dom)
//
//     const options = selectionParser.parse()
//     console.log(options)
// })
