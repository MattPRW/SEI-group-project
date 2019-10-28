const mongoose = require('mongoose')

const ratingSchema = new mongoose.Schema({
  upVotes: { type: Number },
  downVotes: { type: Number }
})

const albumSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true }, // unique id (used deezer id) prevents for the same album to be added to DB twice. DB still provides its own unique _id
  title: { type: String, required: true },
  cover_medium: { type: String, required: true },
  genre_id: { type: Number },
  artist: { type: Object },
  users: { type: Array },
  user: { type: String },
  rating: [ratingSchema]
}, {
  timestamps: true
})

module.exports = mongoose.model('Album', albumSchema)