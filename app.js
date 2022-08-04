const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()

app.use(express.json())

mongoose.connect(process.env.DB_URL, {useNewUrlParser:true, useUnifiedTopology: true})

const userRouter = require('./routes/users')
app.use('/users', userRouter)

const server = app.listen(9001, () => {
    const port = server.address().port
    console.log(`Express running on port: ${port}`)
})