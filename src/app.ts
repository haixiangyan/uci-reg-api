import express from 'express'
import logger from 'morgan'

import optionsRouter from './routes/options'
import coursesRouter from './routes/courses'

const app = express()

// Use middle wares
app.use(express.static(__dirname + '/public'));
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/options', optionsRouter)
app.use('/courses', coursesRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    res.status(404).send('Not Found, try /options or /courses')
})

export default app
