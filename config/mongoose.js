const mongoose = require('mongoose')
const db = 'mongodb+srv://shadi:5748403@cluster0.czpdsya.mongodb.net/?retryWrites=true&w=majority'

// mongoose.set('useFindAndModify', false);

mongoose.connect(db)
    .then(() => { console.log("DB connceted") })
    .catch((err) => { console.log(err) })