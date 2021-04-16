require('dotenv').config()

const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')

const dbConnString = process.env.DB_CONN_STRING

mongoose.connect(dbConnString, {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection
db.on('error', err => console.error('DB connection error', err))
db.once('open',function() {
    console.log('connected boyeeee')
})

const app = express()
const PORT = process.env.PORT

app.use(logger('dev'))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const postRouter = require('./routes/posts')

app.use('/posts', postRouter)

app.listen(PORT, () => {
    console.info(`app listening on port ${PORT}`)
})
