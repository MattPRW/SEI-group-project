const User = require('../models/User')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')

function register(req, res, next) {
  User
    .create(req.body)
    .then(user => res.status(201).json({ message: `Thanks for registering, ${user.username}. Now please login.` }))
    .catch(next)

}

// login route -/login
function login(req, res) {
  User
    .findOne({ email: req.body.email }) //find the user by that email
    .then(user => {
      console.log(user)
      if (!user || !user.validatePassword(req.body.password)) {
        return res.status(401).json({ message: 'Unauthorized' })
      }
      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' })
      res.status(202).json({ message: `Welcome back, ${user.username}.`, token })
    })
    .catch(() => res.status(401).json({ message: 'Unauthorized2' }))
}

function profile(req, res) { // route for a user /profile
  User
    .findById(req.currentUser._id)
    .populate('rekordBox')
    .then(user => res.status(200).json(user))
    .catch(err => res.json(err))
}

function displayRekordBox(req, res) { // route for a user /profile
  User
    .findById(req.currentUser._id)
    .populate('rekordBox')
    .then(user => res.status(200).json(user.rekordBox))
    .catch(err => res.json(err))
}

function displayOtherUser(req, res) { // route for a user /profile
  User
    .findById(req.params.id)
    .populate('rekordBox')
    .then(user => res.status(200).json(user))
    .catch(err => res.json(err))
}

//route to find all users
function index(req, res) {
  User
    .find()
    .populate('rekordBox')
    .then(users => res.status(200).json(users))
    .catch(() => res.status(404).json({ message: 'Not Found' }))
}

function update(req, res, next) { // route to update user profile
  User
    .findById(req.currentUser._id)
    .then(user => {
      if (!user) return res.status(404).json({ message: 'Not Found' })
      if (!user._id.equals(req.currentUser._id)) return res.status(401).json({ message: 'Unauthorized' })
      req.body.user = req.currentUser
      return user.set(req.body)
    })
    .then(user => user.save())
    .then(user => res.status(202).json({ message: 'Profile updated.', user }))
    .catch(next)
}

module.exports = {
  update,
  profile,
  register,
  login, // exporting each 'route handling' function, taking advantage of es6 object short hand, same as saying { login: login },
  index,
  displayRekordBox,
  displayOtherUser
}