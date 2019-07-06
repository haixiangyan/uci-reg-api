import 'babel-polyfill'
import cheerio from 'cheerio'
import fs from 'fs'
import {getOptionPage} from './services/optionService'
import OptionParser from "./parser/OptionParser"
import {getCoursePage} from "./services/courseService"
import CourseParser from "./parser/CourseParser"
import {RequestBody} from "./types"

const defaultRequestBody: RequestBody = {
    'YearTerm': '2019-92',
    'ShowComments': 'on',
    'ShowFinals': 'on',
    'Breadth': 'ANY',
    'Dept': 'NET SYS',
    'CourseNum': '',
    'Division': 'ANY',
    'CourseCodes': '',
    'InstrName': '',
    'CourseTitle': '',
    'ClassType': 'ALL',
    'Units': '',
    'Days': '',
    'StartTime': '',
    'EndTime': '',
    'MaxCap': '',
    'FullCourses': 'ANY',
    'FontSize': '100',
    'CancelledCourses': 'Exclude',
    'Bldg': '',
    'Room': '',
    'Submit': 'Display Web Results'
}

getCoursePage(defaultRequestBody).then((data) => {
    const dom: CheerioStatic = cheerio.load(data)

    const regParser = new CourseParser(dom)

    const courses = regParser.parse()
    console.log(courses)
})

// getOptionPage().then(response => {
//     const dom: CheerioStatic = cheerio.load(response.data)
//
//     const selectionParser = new OptionParser(dom)
//
//     const options = selectionParser.parse()
//     console.log(options)
//     fs.writeFile('output.js', options, () => {
//         console.log('Success')
//     })
// })
