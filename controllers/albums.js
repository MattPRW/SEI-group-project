const Album = require('../models/Album')
const axios = require('axios')

//below function is thoughts draft of how to do deezer call from backend
// function searchAlbums(req, res) {
//   app.get('myproxyroute', (req, res) => {
//     axios.get(`https://api.deezer.com/search/album/?q=${req.body}`)
//       .then(res => res.status(200).json({ message: 'Message Sent ' }))
//       .catch(err => res.json(err))
//   })
// }

//create album
function create(req, res) {
  Album
    .create(req.body)
    .then(album => res.status(201).json(album))
    .catch(err => res.json(err.message))
}

//Index all albums in DB
function index(req, res) {
  Album
    .find()
    .then(albums => res.status(200).json(albums))
    .catch(err => res.json(err.message))
}

module.exports = {
  create,
  index
}