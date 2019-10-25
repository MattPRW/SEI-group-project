const router = require('express').Router()
const users = require('../controllers/auth') // getting my auth controller
const secureRoute = require('../lib/secureRoute') 

router.route('/register') // just handling the register controller
  .post(users.register)

router.route('/login') // just handling user login controller
  .post(users.login) // we dont use a param.id to find the user, see the controller

router.route('/profile')
  .get(secureRoute, users.profile)

module.exports = router 