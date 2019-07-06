import 'babel-polyfill'
import cheerio from 'cheerio'
import {getOptionPage} from './services/optionService'
import OptionParser from "./parser/OptionParser"
// getCoursePage().then((data) => {
//     const dom: CheerioStatic = cheerio.load(data)
//
//     const regParser = new CourseParser(dom)
//
//     const courses = regParser.parse()
//     console.log(courses)
// })

getOptionPage().then(data => {
    const dom: CheerioStatic = cheerio.load(data)

    const selectionParser = new OptionParser(dom)

    const options = selectionParser.parse()
})
