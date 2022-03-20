const express = require('express')
require('express-async-errors')
const logger = require('./utils/logger')
const middleware = require('./utils/middleware')
const app = express()
const cors = require('cors')
const passengersRouter = require('./controllers/passengers')
const blacklistsRouter = require('./controllers/blacklists')
const mongoose = require('mongoose')

const db = 'mongodb+srv://13tanamatef:160300@cluster0.0k5jl.mongodb.net/train-booking?retryWrites=true&w=majority'

logger.info('Connecting to MongoDb', db)

mongoose.connect(db)
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/passengers', passengersRouter)
app.use('/api/blacklists', blacklistsRouter)



module.exports = app