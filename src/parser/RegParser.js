export default class RegParser {
    constructor(dom) {
        this.$ = dom
    }

    parse() {
        let courses = []
        this.$('.CourseTitle').each((index, element) => {
            let course = {}

            course.title = this.$(element).text().trim().split(/\s{2,}/)

            courses.push(course)
        })

        console.log(courses)
    }
}