interface ICourse {
    title: string,
}

export default class RegParser {
    private $: any
    constructor(dom: CheerioStatic) {
        this.$ = dom
    }

    parse() {
        let courses: ICourse[] = []
        this.$('.CourseTitle').each((index: number, element: CheerioElement) => {
            let course: ICourse = {
                title: undefined
            }

            course.title = this.$(element).text().trim().split(/\s{2,}/)

            courses.push(course)
        })

        console.log(courses)
    }
}