const express = require('express');
const morgan = require('morgan');
const ticketRoutes = require('./routes/ticketRoutes')
const categoryRoutes = require('./routes/categoryRoutes');
const authRoutes = require('./routes/authRoutes');
const roleRoutes = require('./routes/roleRoutes');
const initialSetup = require('./utils/initialSetup')

const app = express();  
//Middleware
app.use(morgan('dev'))
app.use(express.json())
// Routes
app.get('/', (req, res) => {
    res.send(`Ticketapi`);

})
app.use('/api/tickets', ticketRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/role', roleRoutes)


initialSetup.createGeneralCategory();
initialSetup.createRoleForCategory();
initialSetup.createRoleForUser();
initialSetup.createAdminRole();
initialSetup.createAdminUser();
// Exports
module.exports = app;




