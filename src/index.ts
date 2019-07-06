import 'babel-polyfill'
import cheerio from 'cheerio'
import CourseParser from './parser/CourseParser'
import {getCoursePage} from "./services/courseService"
import {getSelectionPage} from "./services/selectionService"

// getCoursePage().then((data) => {
//     const dom: CheerioStatic = cheerio.load(data)
//
//     const regParser = new CourseParser(dom)
//
//     const courses = regParser.parse()
//     console.log(courses)
// })

getSelectionPage().then(data => {
    console.log(data)
})
