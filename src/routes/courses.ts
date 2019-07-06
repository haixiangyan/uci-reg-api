import express, {NextFunction, Request, Response} from 'express'
import {CourseParser} from '../../lib'
import {RequestBody} from "../../lib/types"

const router = express.Router()

router.post('/', function (req: Request, res: Response, next: NextFunction) {
    let requestBody: RequestBody = {}

    // Make all fields and values to uppercase
    for (let key of Object.keys(req.body)) {
        requestBody[key] = req.body[key].toUpperCase()
    }

    CourseParser.getInstance(requestBody).then(parser => {
        const courses = parser.parse()
        return res.json(courses)
    })
})

export default router
