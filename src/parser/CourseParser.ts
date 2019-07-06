import cheerio from 'cheerio'
import { validate, courseDetailsAttr, blueBarAttr } from '../utils/validation'
import { columns } from "../meta/format"
import {Course, SubCourse,} from "../types"

class CourseParser {
    private $: CheerioStatic

    constructor(dom: CheerioStatic) {
        this.$ = dom
    }

    // Main parse function
    // 1. Parse course title
    // 2. Parse sub course
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
            course.subCourses = this.parseSubCourses(courseTitleElement.parentNode.nextSibling)

            // Add course object to list
            courses.push(course)
        })

        return courses
    }

    // Parse sub courses information
    parseSubCourses(currentElement: CheerioElement): SubCourse[] {
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

export default CourseParser