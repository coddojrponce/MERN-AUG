const UserController = require('../controllers/user.controller')

const routes = (app)=>{

    
    //Create
    app.post('/api/v1/register',UserController.register)
    //Read
    app.post('/api/v1/login',UserController.login)
    
    app.get('/api/v1/logout',UserController.logout)

    app.get('/api/v1/users',UserController.getAll)
}


module.exports = routes