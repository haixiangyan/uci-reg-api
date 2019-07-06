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
            course.details = this.parseCourseDetails(courseTitleElement.parentNode.nextSibling)

            // Add course object to list
            courses.push(course)
            console.log('-------------------------==∆')
        })

        return courses
    }

    parseCourseDetails(currentElement: CheerioElement): CourseDetails {
        let courseDetails = {}

        while (!validate(currentElement, blueBarAttr)) {
            if (validate(currentElement, courseDetailsAttr)) {
                console.log(currentElement.childNodes.length)
            }
            currentElement = currentElement.nextSibling
        }
        // console.log(currentElement.attribs)

        return courseDetails
    }
}

export default RegParser