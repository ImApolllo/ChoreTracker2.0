const ChoreController = require('../controllers/chores.controller');

module.exports = app => {
    app.post('/api/createChore', ChoreController.createChore)
    app.get('/api/getOne/:id', ChoreController.getOneChore)
    app.put('/api/update/:id', ChoreController.updateChore)
    app.delete('/api/delete/:id', ChoreController.deleteChore)
    app.get('/api/allChores', ChoreController.allChores)
}