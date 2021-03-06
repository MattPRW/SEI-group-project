const router = require('express').Router()
const users = require('../controllers/auth') // getting my auth controller
const albums = require('../controllers/albums') // getting albums controller
const proxyRequests = require('../controllers/proxyRequests')
const secureRoute = require('../lib/secureRoute')

router.route('/register') // just handling the register controller
  .post(users.register)

router.route('/login') // just handling user login controller
  .post(users.login) // we dont use a param.id to find the user, see the controller

router.route('/profile')  //user profile controller
  .get(secureRoute, users.profile)
  .put(secureRoute, users.update)

router.route('/profile/albums')
  .get(secureRoute, users.displayRekordBox)

router.route('/profile/albums/:id')
  .delete(secureRoute, albums.remove)

router.route('/albums') // creating one album in database when user clicks add to collection button. Actual adding to user collection is another route
  .post(secureRoute, albums.create)
  .get(albums.index)

router.route('/albums/:id')
  .get(albums.show)
  .delete(secureRoute, albums.remove)

router.route('/users')
  .get(secureRoute, users.index)

router.route('/users/:id')
  .get(secureRoute, users.displayOtherUser)

router.route('/proxyrequest/albumSearch/:id')
  .get(proxyRequests.proxySearch)

router.route('/proxyrequest/albumtracks/:id')
  .get(proxyRequests.proxyRetrieveTracks)

module.exports = router 