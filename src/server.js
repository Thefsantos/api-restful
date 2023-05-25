const express = require('express')
const routes = require('./routes/routes')
const db = require('./database/db')


const app = express()

app.use(express.urlencoded({ extended: true }))


db.connect()

app.use('/api', routes)


const port = process.env.PORT || 8080

app.listen(port, () => console.log(`Server is listening on port ${port}`))