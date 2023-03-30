const ChoreModel = require('../models/chores.models');
const jwt = require('jsonwebtoken');

module.exports = {
    //Create Chore
    createChore: async (req, res) => {
        try {
            const chore = req.body;
            console.log("Chore\n", chore);
            const decodedJwt = jwt.decode(req.cookies.userToken, {complete:true});
            console.log(decodedJwt);
            const user_id = decodedJwt.payload._id
            console.log(user_id);
            const completedChore = {...chore, user_id:user_id};
            const newChore = await ChoreModel.create(completedChore);
            res.json(newChore);
        }
        catch(err) {
            res.status(400).json(err);
        }
    },

    getOneChore: async (res, req) => {
        try {

        }
        catch(err) {
            res.status(400).json(err);
        }
    },

    updateChore: async (req, res) => {
        try {

        }
        catch(err) {
            res.status(400).json(err);
        }
    },

    deleteChore: async (req, res) => {
        try {

        }
        catch(err) {
            res.status(400).json(err);
        }
    },

    allChores: async (req, res) => {
        try {

        }
        catch(err) {
            res.status(400).json(err);
        }
    }
}