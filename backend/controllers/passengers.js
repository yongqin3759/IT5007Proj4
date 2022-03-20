const passengersRouter = require('express').Router()
const Passenger = require('../models/passenger')

passengersRouter.post('/', async (request, response) => {
  const body = request.body

  
  passenger = new Passenger({
    seatNo: body.seatNo,
    available: body.available,
    firstName: null,
    lastName: null,
    time: null
  })
  

  const savedPassenger = await passenger.save()
  response.json(savedPassenger)
})

passengersRouter.get('/', async(request, response) => {
  const passengers = await Passenger.find({})
  response.json(passengers)
})

passengersRouter.put('/:id', async (request, response) => {
  const body = request.body

  let passenger

  if(!body.available){
    passenger = {
      available: body.available,
      firstName: body.firstName,
      lastName: body.lastName,
      time: new Date().toISOString()
    }
  }else{
    passenger = {
      available: body.available,
      firstName: null,
      lastName: null,
      time: null
    }
  }

  const updatedPassenger = await Passenger.findByIdAndUpdate(request.params.id, passenger, { new: true })

  response.json(updatedPassenger)
})

module.exports = passengersRouter