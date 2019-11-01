const Album = require('../models/Album')

function create(req, res) { // grabs album from Deezer DB if only it does not exist in local DB. Once created it adds the user to users array.
  !req.body.deezerId && (req.body.deezerId = req.body.id) //rewrites deezer object data to our model format
  !req.body.coverImage && (req.body.coverImage = req.body.cover_medium)//rewrites deezer object data to our model format
  Album
    .findOne( { deezerId: req.body.deezerId })
    .then(album => {
      if (!album) return Album.create(req.body)
      return album
    })
    .then(album => {
      if (album.users.includes(req.currentUser._id)) return album.save()
      album.users.push(req.currentUser)
      return album.save()
    }
    )
    .then(album => res.status(201).json(album))
    .catch(err => res.json(err.message))
}

function remove(req, res) { // removes user from users array and users rekordbox rather than album fro DB
  req.body.deezerId = req.params.id //rewrites deezer object data to our model format
  console.log(req.currentUser._id)
  Album
    .findById(req.params.id)
    .populate('users')
    // .then(album => res.status(200).json(album))
    .then(album => {
      if (!album) return res.status(404).json({ message: 'Not Found' })
      const users = album.users.filter(user => user.username !== req.currentUser.username) // removes user from album by unique username
      album.users = users
      return album.save()
    })
    .then(album => res.status(202).json(album))
    .catch(err => res.json(err.message))
}

function show(req, res) { // removes user from users array and users rekordbox rather than album fro DB
  req.body.deezerId = req.params.id //rewrites deezer object data to our model format
  Album
    .findById(req.params.id)
    .populate('users')
    .then(albums => res.status(200).json(albums))
    .catch(err => res.json(err.message))
}

//Index all albums in DB
function index(req, res) {
  Album
    .find()
    .populate('users')
    .then(albums => res.status(200).json(albums))
    .catch(err => res.json(err.message))
}

module.exports = {
  create,
  index,
  show,
  remove
}