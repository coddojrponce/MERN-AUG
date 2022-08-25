const express = require('express')
const { faker } = require('@faker-js/faker')
const app = express()
const port = 8000

const users = []

app.get('/',(req,res)=>{
    res.json({message:'hello world'})
})

app.get('/users',(req,res)=>{
    res.json({users:users})
})



app.post('/users',(req,res)=>{
    const user = {
        userId: faker.datatype.uuid(),
        name:faker.internet.userName(),
        email:faker.internet.email(),
    }
    users.push(user)
    res.json({user:user})
})

app.listen(port,()=>console.log(`Locked and loaded on port ${port}`))