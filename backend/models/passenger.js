const mongoose = require('mongoose')
const passengerSchema = new mongoose.Schema({
  seatNo: Number,
  available: Boolean,
  firstName: {type:String,
    required: false
  },
  lastName: {type:String,
    required: false
  },
  time: {type:String,
    required: false
  }
})

passengerSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const passenger = mongoose.model('passengers', passengerSchema)

module.exports = passenger