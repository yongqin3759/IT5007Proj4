const mongoose = require('mongoose')

const blacklistSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
})

blacklistSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const blacklist = mongoose.model('blacklists', blacklistSchema)

module.exports = blacklist