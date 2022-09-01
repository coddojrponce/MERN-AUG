const mongoose = require('mongoose')
const {DB_PASSWORD} = process.env


mongoose.connect(`mongodb+srv://rponce:${DB_PASSWORD}@cluster0.93fblcz.mongodb.net/?retryWrites=true&w=majority`)
.then(()=>{
    console.log("successfully connected to the DB")
})
.catch((err)=>{
    console.log("There has been an error connecting to the db")
})