import CP from "./parser/CourseParser"
import OP from "./parser/OptionParser"

export const CourseParser = CP
export const OptionParser =  OP

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
