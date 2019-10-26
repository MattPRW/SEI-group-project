const router = require('express').Router()
const users = require('../controllers/auth') // getting my auth controller
const albums = require('../controllers/albums') // getting albums controller
const secureRoute = require('../lib/secureRoute')

router.route('/register') // just handling the register controller
  .post(users.register)

router.route('/login') // just handling user login controller
  .post(users.login) // we dont use a param.id to find the user, see the controller

router.route('/profile')
  .get(secureRoute, users.profile)

router.route('/albums') // creating one album in database when user clicks add to collection button. Actual adding to user collection is another route
  .post(albums.create)
  .get(albums.index)

module.exports = router 