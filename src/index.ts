import 'babel-polyfill'
import {getCoursePage} from "./http/courseService"

getCoursePage().then((courses) => {
    console.log(courses)
})
