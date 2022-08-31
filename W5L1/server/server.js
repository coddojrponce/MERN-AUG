const express = require('express')
const app = express()
const port = 8000

let users = []
// important stuff
app.use(express.json())


//Create

app.post('/api/v1/users',(req,res)=>{
    const user = {
        id:new Date().getTime(),
        name:req.body.name,
        email:req.body.email
    }
    users.push(user)
    res.json({user:user})

})

//Read

app.get('/api/v1/users',(req,res)=>{
    res.json({users:users})
})

app.get('/api/v1/users/:id',(req,res)=>{
    // console.log(req.params.id)
    const thisUser = users.filter((item,idx)=>(item.id == req.params.id))
    // console.log(thisUser)
    res.json({user:thisUser})
})


//Update

app.put('/api/v1/users/:id',(req,res)=>{
    const newList = users.map((item,idx)=>(item.id === parseInt(req.params.id)?{id:parseInt(req.params.id),name:req.body.name,email:req.body.email}:item))

    users = newList
    res.json({users:users})
})


//Destroy


app.listen(port,()=>console.log(`Locked and loaded on port ${port}`))