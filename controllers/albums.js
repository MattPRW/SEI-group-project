//albums will be controlled here
const Album = require('../models/Album')
const axios = require('axios')

function searchAlbums(req, res) {
  app.get('myproxyroute', (req, res) => {
    axios.get(`https://api.deezer.com/search/album/?q=${req.body}`)
      .then(res => res.status(200).json({ message: 'Message Sent ' }))
      .catch(err => res.json(err))
  })
}

module.exports = {
  searchAlbums
}