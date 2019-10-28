const RecordBox = require('../models/RecordBox')
const Album = require('../models/Album')

function index(req, res) {
  // User
  //   .findById(req.currentUser._id)
  RecordBox
    .then(records => res.status(201).json(records))
    .catch(err => res.json(err.message))
}

function addAlbum(req, res) {
  Album
    .findOne({ id: req.body.id })
    .then(car => {
      if (!car) return res.sendStatus(404).json({ message: 'Request Not Found' })
      res.status(200).json(car)
    })
    .catch(err => res.json(err.message))

}
module.exports = {

}