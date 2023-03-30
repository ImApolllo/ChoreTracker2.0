const mongoose = require('mongoose')
const db = 'chooooooores'

mongoose.connect(`mongodb://127.0.0.1/${db}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then( ()=>console.log('Running db:', db) )
    .catch( err=>console.log("Beep! Bad db! " + err) )