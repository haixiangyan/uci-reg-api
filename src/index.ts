import 'babel-polyfill'
import OptionParser from "./parser/OptionParser"
import CourseParser from "./parser/CourseParser"

// Usage
// CourseParser.getInstance({}).then(parser => {
//     const courses = parser.parse()
//     console.log(courses)
// })
//
// OptionParser.getInstance().then(parser => {
//     const options = parser.parse()
//     console.log(options)
// })

export default {
    OptionParser,
    CourseParser
}
