import cheerio from 'cheerio'
import {Option} from "../types"

class OptionParser {
    private readonly $: CheerioStatic

    constructor(dom: CheerioStatic) {
        this.$ = dom
    }

    parse() {
        // Parse year terms
        this.parseYearTerms()
    }

    parseYearTerms(): Option[] {
        let yearTerms: Option[] = []

        // Get Selector
        const yearTermElement = this.$('select[name="YearTerm"] > option')

        // Get Options
        yearTermElement.each((index: number, child: CheerioElement) => {
            yearTerms.push({
                value: child.attribs.value,
                text: cheerio(child).text()
            })
        })

        return yearTerms
    }
}

export default OptionParser