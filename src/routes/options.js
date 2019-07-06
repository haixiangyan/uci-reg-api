import express from 'express'

const router = express.Router()

router.get('/', function (req, res, next) {
    res.json({
        name: 'Jack',
        password: '123'
    })
})

export default router
