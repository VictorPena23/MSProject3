require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const patientRoutes = require('./routes/patientRoute')
const userRoutes = require('./routes/user')

//express app
const app = express()

//middleware
//problem with response
app.use((req, _res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use(express.json())

//routes
app.use('/api/patients', patientRoutes)
app.use('/api/user', userRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('connected to db and listening on PORT', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })

process.env

