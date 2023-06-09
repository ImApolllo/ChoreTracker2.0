const CONTROLLER = require('../controllers/users.controller')

module.exports = app  => {
    
    app.post('/api/register', CONTROLLER.registerUser)
    app.post('/api/login', CONTROLLER.login)
    app.post('/api/logout', CONTROLLER.logout)
}