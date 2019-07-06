import cheerio from 'cheerio'
import {blueBarAttr, courseDetailsAttr, validate} from '../utils/validation'
import {Course, RequestBody, SubCourse,} from "../types"
import {getCoursePage} from "../services/courseService"


class CourseParser {
    private requestBody: RequestBody
    private $: CheerioStatic
    private readonly columns = ["Code", "Type", "Sec", "Units", "Instructor", "Time", "Place", "Final", "Max", "Enr", "WL", "Req", "Nor", "Rstr", "Textbooks", "Web", "Status"]
    private readonly defaultRequestBody: RequestBody = {
        'YearTerm': '2019-92',
        'ShowComments': 'on',
        'ShowFinals': 'on',
        'Breadth': 'ANY',
        'Dept': 'NET SYS',
        'CourseNum': '',
        'Division': 'ANY',
        'CourseCodes': '',
        'InstrName': '',
        'CourseTitle': '',
        'ClassType': 'ALL',
        'Units': '',
        'Days': '',
        'StartTime': '',
        'EndTime': '',
        'MaxCap': '',
        'FullCourses': 'ANY',
        'FontSize': '100',
        'CancelledCourses': 'Exclude',
        'Bldg': '',
        'Room': '',
        'Submit': 'Display Web Results'
    }

    constructor(requestBody: RequestBody) {
        this.requestBody = Object.assign({}, this.defaultRequestBody, requestBody ? requestBody : {})
    }

    async initialize() {
        const data = await getCoursePage(this.defaultRequestBody)

        this.$ =  cheerio.load(data)
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
                    subCourse[this.columns[index]] = cheerio(child).text().trim()
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