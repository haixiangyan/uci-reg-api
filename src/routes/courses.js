import express from 'express'
import { CourseParser } from '../../lib/index'

const router = express.Router()

router.get('/', function (req, res, next) {
    CourseParser.getInstance().then(parser => {
        const courses = parser.parse()
        return res.json(courses)
    })
})

export default router
