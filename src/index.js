import 'babel-polyfill'
import axios from 'axios'
import cheerio from 'cheerio'
import {requestOptions} from './http/request'

axios(requestOptions)
    .then(response => {
        const dom = cheerio.load(response.data)
        console.log(dom.html())
    })
