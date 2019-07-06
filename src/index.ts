import 'babel-polyfill'
import cheerio from 'cheerio'
import fs from 'fs'
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

getOptionPage().then(response => {
    const dom: CheerioStatic = cheerio.load(response.data)

    const selectionParser = new OptionParser(dom)

    const options = selectionParser.parse()
    console.log(options)
    fs.writeFile('output.js', options, () => {
        console.log('Success')
    })
})
