const mongoose = require('mongoose');

const ChoreSchema = new mongoose.Schema ({
    choreName: {
        type: String,
        required: [true, "A Chore needs a name..."]
    },
    choreDesc: {
        type: String,
        required: [true, "Your Chore needs a description!"]
    }, 
    choreLoc: {
        type: String,
        required: [true, "Where is your chore?"]
    },
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
        // refers back to our UserSchema
    }
}, {timestamps: true})

module.exports = mongoose.model("Chores", ChoreSchema);