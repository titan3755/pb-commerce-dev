require('dotenv').config()
const { application } = require('express')
const express = require('express')
const mongoose = require('mongoose')
const colors = require('colors')
const globalMiddlewares = require('./middleware/all')
const primaryRoutes = require('./routes/primary')
const protectedRoutes = require('./routes/admin')
const userProfileRoutes = require('./routes/users')
const PORT = process.env.PORT || 4000
const HOSTNAME = process.env.HOSTNAME || 'localhost'
const app = express()

app.use(globalMiddlewares)
app.use(primaryRoutes)
app.use('/admin', protectedRoutes)
app.use('/users', userProfileRoutes)
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.kpmk7.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
    .then((msg) => {
        console.log(`Successfully connected to MongoDB!`.green)
        app.listen(PORT, HOSTNAME, () => {
            console.log(`Server Online! PORT: ${PORT} HOSTNAME: ${HOSTNAME}`.green)
        })
    })
    .catch((msg) => {
        console.log('Failed to connect to DB!'.red)
    })