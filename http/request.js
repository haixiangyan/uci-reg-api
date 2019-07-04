const qs = require('qs')
const cheerio = require('cheerio')
const axios = require('axios')
const config = require('../meta/config')
const format = require('../meta/format')

const options = {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(format.requestBody),
    url: config.base_url
}

module.exports = function() {
    return axios(options).then(function (response) {
        const dom = cheerio.load(response.data)
        console.log(dom.html())
    })
}