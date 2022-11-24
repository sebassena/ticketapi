const app = require('./app')
const db = require('./db/db')
const port = 3000


db()
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
