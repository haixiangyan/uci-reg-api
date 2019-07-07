import cheerio from 'cheerio'
import { validate } from '../../utils/validation'

describe('validate function', () => {
    test('can validate correct element', () => {
        const html = `
        <h1 bgcolor="red"></h1>
    `
        const attr = {
            bgcolor: 'red'
        }
        const dom: CheerioStatic = cheerio.load(html)

        dom('h1').each((index: number, element: CheerioElement) => {
            expect(validate(element, attr)).toBeTruthy()
        })
    });

    test('can validate incorrect element', () => {
        const html = `
        <h1 bgcolor="red"></h1>
    `
        const attr = {
            bgcolor: 'blue'
        }
        const dom: CheerioStatic = cheerio.load(html)

        dom('h1').each((index: number, element: CheerioElement) => {
            expect(validate(element, attr)).toBeFalsy()
        })
    })
})
