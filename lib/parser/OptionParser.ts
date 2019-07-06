import cheerio from 'cheerio'
import {Option, RegOptions} from "../types"
import {getOptionPage} from "../services/optionService"

class OptionParser {
    private readonly optionPageDOM: CheerioStatic = undefined
    private static instance: OptionParser = undefined

    constructor(dom: CheerioStatic) {
        this.optionPageDOM = dom
    }

    static async getInstance() {
        // First time to call getInstance()
        if (!this.instance) {
            // Request for web reg web page
            const data = await getOptionPage()

            // Load home page html
            const dom = cheerio.load(data)

            // Create new instance
            this.instance = new OptionParser(dom)
        }

        return this.instance
    }

    parse(): RegOptions {
        // Define options to store all options
        let regOptions: RegOptions = {
            YearTerm: [],
            Breadth: [],
            Dept: [],
            ClassType: [],
            StartTime: [],
            EndTime: [],
            FullCourses: [],
            CancelledCourses: []
        }

        // Parse year term
        regOptions.YearTerm = this.parseYearTerms()

        // Parse breath
        regOptions.Breadth = this.parseBreadth()

        // Parse dept
        regOptions.Dept = this.parseDept()

        // Parse class type
        regOptions.ClassType = this.parseClassType()

        // Parse start time
        regOptions.StartTime = this.parseStartTime()

        // Parse end time
        regOptions.EndTime = this.parseEndTime()

        // Parse full courses
        regOptions.FullCourses = this.parseFullCourses()

        // Parse cancelled course
        regOptions.CancelledCourses = this.parseCancelledCourses()

        return regOptions
    }

    parseYearTerms(): Option[] {
        let options: Option[] = []

        // Get Selector
        const selector = this.optionPageDOM(`select[name="YearTerm"] > option`)

        // Get options
        selector.each((index: number, child: CheerioElement) => {
            options.push({
                value: child.attribs.value,
                text: cheerio(child).text()
            })
        })

        return options
    }

    parseBreadth(): Option[] {
        let options: Option[] = []

        // Get Selector
        const selector = this.optionPageDOM(`select[name="Breadth"] > option`)

        // Get options
        selector.each((index: number, child: CheerioElement) => {
            options.push({
                value: child.attribs.value,
                text: cheerio(child).text()
            })
        })

        return options
    }

    parseDept(): Option[] {
        let options: Option[] = []

        // Get Selector
        const selector = this.optionPageDOM(`select[name="Dept"] > option`)

        // Get options
        selector.each((index: number, child: CheerioElement) => {
            options.push({
                value: child.attribs.value,
                text: cheerio(child).text()
            })
        })

        return options
    }

    parseClassType(): Option[] {
        let options: Option[] = []

        // Get Selector
        const selector = this.optionPageDOM(`select[name="ClassType"] > option`)

        // Get options
        selector.each((index: number, child: CheerioElement) => {
            options.push({
                value: child.attribs.value,
                text: cheerio(child).text()
            })
        })

        return options
    }

    parseStartTime(): Option[] {
        let options: Option[] = []

        // Get Selector
        const selector = this.optionPageDOM(`select[name="StartTime"] > option`)

        // Get options
        selector.each((index: number, child: CheerioElement) => {
            const text = cheerio(child).text().trim()
            if (text !== '') {
                options.push({ value: text, text })
            }
            else {
                options.unshift({ value: 'ANY', text: 'ANY' })
            }
        })

        return options
    }

    parseEndTime(): Option[] {
        let options: Option[] = []

        // Get Selector
        const selector = this.optionPageDOM(`select[name="EndTime"] > option`)

        // Get options
        selector.each((index: number, child: CheerioElement) => {
            const text = cheerio(child).text().trim()
            if (text !== '') {
                options.push({ value: text, text })
            }
            else {
                options.unshift({ value: 'ANY', text: 'ANY' })
            }
        })

        return options
    }

    parseFullCourses(): Option[] {
        let options: Option[] = []

        // Get Selector
        const selector = this.optionPageDOM(`select[name="FullCourses"] > option`)

        // Get options
        selector.each((index: number, child: CheerioElement) => {
            const text = cheerio(child).text().trim()
            if (text !== '') {
                options.push({ value: child.attribs.value, text })
            }
            else {
                options.unshift({ value: 'ANY', text: 'ANY' })
            }
        })

        return options
    }

    parseCancelledCourses(): Option[] {
        let options: Option[] = []

        // Get Selector
        const selector = this.optionPageDOM(`select[name="CancelledCourses"] > option`)

        // Get options
        selector.each((index: number, child: CheerioElement) => {
            options.push({
                value: child.attribs.value,
                text: cheerio(child).text()
            })
        })

        return options
    }
}

export default OptionParser