const RecordBox = require('../models/RecordBox')
const Album = require('../models/Album')
const User = require('../models/User')

function index(req, res) {
  User
    .findById(req.currentUser._id)
  RecordBox
    .then(records => res.status(201).json(records))
    .catch(err => res.json(err.message))
}

function addAlbum(req, res) {
  Album
    .findOne({ id: req.body.id })

}
module.exports = {
  index
}