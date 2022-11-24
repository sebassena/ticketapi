const express = require('express');
const morgan = require('morgan');
const ticketRoutes = require('./routes/ticketRoutes')


const app = express();  
//Middleware
app.use(morgan('dev'))
// Routes
app.get('/', (req, res) => {
    res.send(`Ticketapi`);

})
app.use('/api/tickets', ticketRoutes)

// Exports
module.exports = app;




