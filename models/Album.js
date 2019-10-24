const mongoose = require('mongoose')

const ratingSchema = new mongoose.Schema({
  upVotes: { type: Number },
  downVotes: { type: Number }
})

const albumSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  cover: { type: String, required: true },
  genre_id: { type: Number },
  artist: { type: String },
  rating: [ratingSchema]
}, {
  timestamps: true
})

module.exports = mongoose.model('Album', albumSchema)