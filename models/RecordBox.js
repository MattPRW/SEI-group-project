const mongoose = require('mongoose')

const recordBoxSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  album: { type: mongoose.Schema.ObjectId, ref: 'Album', required: true },
  rating: { type: Number }
}, {
  timestamps: true
})

module.exports = mongoose.model('RecordBox', recordBoxSchema)
