const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  image: {
    type: String, default: 'https://i.pinimg.com/originals/d6/88/10/d688106b46b6b0454046981212f993dd.jpg' },
  friends: { type: [String] },
  // recordBox: { type: mongoose.Schema.ObjectId, ref: 'RecordBox' },
  address: { type: String }
}, {
  timestamps: true
})

userSchema.plugin(require('mongoose-unique-validator'))

userSchema.virtual('rekordBox', {
  ref: 'Album',
  localField: '_id',
  foreignField: 'users'
})

userSchema.set('toJSON', {
  virtuals: true,
  transform(doc, json) {
    delete json.password
    return json
  }
})

userSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation
  })

userSchema
  .pre('validate', function checkPassword(next) {
    if (this.isModified('password') && this._passwordConfirmation !== this.password) {
      this.invalidate('passwordConfirmation', 'does not match')
    }
    next()
  })

userSchema
  .pre('save', function hashPassword(next) {
    if (this.isModified('password')) {
      this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8))
    }
    next()
  })

userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model('User', userSchema)
