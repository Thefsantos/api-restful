const express = require('express')
const cors = require('cors')
const routes = require('./routes/routes')
const db = require('./database/db')


const app = express()

app.use(express.json())

db.connect()

const allowedOrigins = [
    'example.com',
    'example2.com'
]

app.use(cors({
    origin: function(origin, callback){
        let allowed = true

        // mobile
        if(!origin) allowed = true

        if(!allowedOrigins.includes(origin)) allowed = false

        callback(null, allowed)
    }
}))

app.use('/api', routes)


const port = process.env.PORT || 8080

app.listen(port, () => console.log(`Server is listening on port ${port}`))