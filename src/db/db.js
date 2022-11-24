const mongoose = require('mongoose');
const urlDB = "mongodb+srv://admin:h6WNptS2O1dzmzyq@cluster0.eemhrop.mongodb.net/?retryWrites=true&w=majority"

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