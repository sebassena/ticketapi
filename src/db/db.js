const mongoose = require('mongoose');
require('dotenv').config()

const urlDB = process.env.MONGO;

const db = async () => {
    try{
        await mongoose.connect(urlDB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Conectado a la base de datos')
    } catch (e) {
        console.log(`Se ha producido un error: \n Error: ${e}`)
    }
}

module.exports = db;