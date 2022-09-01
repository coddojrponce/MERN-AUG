require('dotenv').config()
const express = require('express')
const app = express()
const port = 8000
const mongoose = require('mongoose')


// important stuff
app.use(express.json())

require('./config/mongoose.config.js')

require('./routes/user.routes')(app)




app.listen(port,()=>console.log(`Locked and loaded on port ${port}`))