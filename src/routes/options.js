import express from 'express'
import { OptionParser } from '../../lib'

const router = express.Router()

router.get('/', function (req, res, next) {
    OptionParser.getInstance().then((parser) => {
        const options = parser.parse()
        res.json(options)
    })
})

export default router
