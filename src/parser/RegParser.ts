import { validate, courseDetailsAttr, blueBarAttr } from '../utils/validation'
interface Course {
    title: string,
    details: CourseDetails
}

interface CourseDetails {
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
    Status?: string
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
                details: {}
            }

            // Get course title
            course.title = this.$(courseTitleElement).text().trim().split(/\s{2,}/).join(' ')

            // Get course info
            course.details = this.parseCourseDetails(courseTitleElement)

            // Add course object to list
            courses.push(course)
        })

        return courses
    }

    parseCourseDetails(courseTitleElement: CheerioElement): CourseDetails {
        let courseDetails = {}
        let currentElement = courseTitleElement

        while (!validate(currentElement, blueBarAttr)) {
            if (validate(currentElement, courseTitleElement)) {
                console.log(currentElement)
            }
            currentElement = currentElement.nextSibling
        }

        return courseDetails
    }
}

export default RegParser