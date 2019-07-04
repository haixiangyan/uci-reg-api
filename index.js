const cheerio = require('cheerio')
const { request } = require('./http/request')

(async function() {
    const html = await request()

    const dom = cheerio.load(html)
    console.log(dom.html())
})()
