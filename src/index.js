const app = require('./app')
const db = require('./db/db')
require('dotenv').config()
const port = process.env.PORT || 3000

db()
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
