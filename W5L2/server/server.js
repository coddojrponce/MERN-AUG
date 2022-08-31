const express = require('express')
const app = express()
const port = 8000

app.use(express.json())

require("./config/mongoose.config")

require('./routes/user.routes')(app)


app.listen(port,()=>console.log(`Locked and loaded on port ${port}`))