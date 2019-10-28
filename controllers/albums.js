const Album = require('../models/Album')

//below function is thoughts draft of how to do deezer call from backend
// function searchAlbums(req, res) {
//   app.get('myproxyroute', (req, res) => {
//     axios.get(`https://api.deezer.com/search/album/?q=${req.body}`)
//       .then(res => res.status(200).json({ message: 'Message Sent ' }))
//       .catch(err => res.json(err))
//   })
// }

//create album
function create(req, res) { // this function currently only adds album to DB with no user id on it. It needs ot work as follows: 1. add album if no existing album id found in DB, 2. add id of each user that clicked "add" to users array. Req body.user=req.currentUser is not yet working so commented out
  req.body.user = req.currentUser
  // req.body[0].users.push(req.currentUser)
  Album
    .create(req.body)
    .then(album => {
      // if (!album) return res.status(404).json({ message: 'Not Found' }) // return res 404 iuf not found
      album.users.push(req.currentUser) // otherwise push the new comment into the body
      return album.save() //  then resave the animal with the new comment
    })
    .then(console.log('album created'))
    .then(album => res.status(201).json(album))
    .catch(err => res.json(err.message))
}
//add to collection - does not work yet so not exported. Will continue to try merge create and add into one function as only one button click calls both.
function addToRecordBox(req, res) {
  // req.body.user = req.currentUser
  Album
    .findById(req.params.id)
    .populate('user')
    .then(album => {
      if (!album) return res.status(404).json({ message: 'Not Found' })
      album.users.push(req.body.user)
      return album.save()
    })
    .then(album => res.status(202).json(album))
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