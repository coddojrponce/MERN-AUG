const express = require('express')
require('dotenv').config();
const app = express()
app.use(express.json())
require('dotenv').config()
const port = process.env.PORT || 8000
const cookieParser = require('cookie-parser')
const cors = require('cors')
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}))
app.use(cookieParser())

//config
require('./config/mongoose.config')


//routes
require('./routes/movie.routes')(app)
require('./routes/user.routes')(app)



app.listen(port,()=>{console.log(`Locked and loaded on port ${port}`)})