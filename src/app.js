const express = require('express')
const app = express();  

app.get('/', (req, res) => {
    res.send(`Ticketapi`);

})

module.exports = app;




