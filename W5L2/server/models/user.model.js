const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Hey Duffuss you need a name"],
        minLength:[2,"Your name must be at least 2 character"],
        maxLength:[4,"Your name must be max of 4 characters"]
    },
    email:{
        type:String
    },
    
},
    {timestamps:true})

const User = mongoose.model("User",UserSchema)

module.exports = User