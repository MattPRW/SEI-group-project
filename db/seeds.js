const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const User = require('../models/User')
// const Album = require('../models/Album')

mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err, db) => {
    if (err) return console.log(err)
    db.dropDatabase()
      .then(() => {
        return User.create([
          {
            username: 'Tom',
            email: 'tom@email',
            password: 'pass',
            passwordConfirmation: 'pass',
            image: 'https://cdn.moneymarketing.co.uk/content/uploads/2019/09/10130911/p30-31-Connor-James-Connor-Broadley-2019-333x500.jpg',
            friends: ['Giedrius', 'Matt'],
            // recordBox: {},
            address: '1 London Street, London, UK'
          },
          {
            username: 'Giedrius',
            email: 'giedrius@email',
            password: 'pass',
            passwordConfirmation: 'pass',
            image: 'https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
            friends: ['Tom', 'Matt'],
            // recordBox: {},
            address: '2 London Street, London, UK'
          },
          {
            username: 'Matt',
            email: 'matt@email',
            password: 'pass',
            passwordConfirmation: 'pass',
            image: 'https://static.wixstatic.com/media/96e345_6604b08d98c64c4592edee1c680b76a8~mv2.jpg/v1/fill/w_430,h_584,al_c,q_80,usm_0.66_1.00_0.01/96e345_6604b08d98c64c4592edee1c680b76a8~mv2.webp',
            friends: ['Giedrius', 'Tom'],
            // recordBox: {},
            address: '3 London Street, London, UK'
          } 
        ]) 
      })
      .then(users => console.log(`${users.length} created`))
      .catch(err => console.log(err))
      .finally(() => mongoose.connection.close())
  }
)