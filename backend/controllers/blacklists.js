const blacklistsRouter = require('express').Router()
const Blacklist = require('../models/blacklist')

blacklistsRouter.post('/', async (request, response) => {
  const body = request.body


  const blacklist = new Blacklist({
    firstName: body.firstName,
    lastName: body.lastName,
  })

  const savedBlacklist = await blacklist.save()
  response.json(savedBlacklist)
})

blacklistsRouter.get('/', async(request, response) => {
  const blacklists = await Blacklist.find({})
  response.json(blacklists)
})

blacklistsRouter.delete('/:id', async (request, response) => {
  await Blacklist.findByIdAndRemove(request.params.id)
  response.status(204).end()
})


module.exports = blacklistsRouter