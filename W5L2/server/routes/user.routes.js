const UserController = require('../controllers/user.controller')

users = []

const routes = (app)=>{
//Create

app.post('/api/v1/users',UserController.create)

//Read

app.get('/api/v1/users',UserController.getAll)

app.get('/api/v1/users/:id',UserController.getOne)


//Update

app.put('/api/v1/users/:id',UserController.updateOne)


//Destroy

app.delete('/api/v1/users/:id',UserController.deleteOne)

}

module.exports = routes

