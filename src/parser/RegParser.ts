import cheerio from 'cheerio'
import { validate, courseDetailsAttr, blueBarAttr } from '../utils/validation'
import { columns } from "../meta/format"

interface Course {
    title: string,
    subCourses: SubCourse[]
}

interface SubCourse {
    Code?: string,
    Type?: string,
    Sec?: string,
    Units?: string,
    Instructor?: string,
    Time?: string,
    Place?: string,
    Final?: string,
    Max?: string,
    Enr?: string,
    WL?: string,
    Req?: string,
    Nor?: string,
    Rstr?: string,
    Textbooks?: string,
    Web?: string,
    Status?: string,
    [column: string]: string;
}

class RegParser {
    private $: CheerioStatic

    constructor(dom: CheerioStatic) {
        this.$ = dom
    }

    parse(): Course[] {
        let courses: Course[] = []
        this.$('.CourseTitle').each((index: number, courseTitleElement: CheerioElement) => {
            let course: Course = {
                title: undefined,
                subCourses: []
            }

            // Get course title
            course.title = this.$(courseTitleElement).text().trim().split(/\s{2,}/).join(' ')

            // Get course info
            course.subCourses = this.parseCourseDetails(courseTitleElement.parentNode.nextSibling)

            // Add course object to list
            courses.push(course)
            console.log(course)
            console.log('==========================')
        })

        return courses
    }

    parseCourseDetails(currentElement: CheerioElement): SubCourse[] {
        let subCourses = []

        while (!validate(currentElement, blueBarAttr)) {
            if (validate(currentElement, courseDetailsAttr)) {
                let subCourse: SubCourse = {}
                // Extract course details
                currentElement.childNodes.forEach( (child, index) => {
                    subCourse[columns[index]] = cheerio(child).text().trim()
                })
                // Append to sub course list
                subCourses.push(subCourse)
            }
            // Update current element
            currentElement = currentElement.nextSibling
        }

        return subCourses
    }
}

export default RegParser