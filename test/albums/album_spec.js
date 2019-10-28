// /* global api, describe, it, expect, beforeEach, afterEach */
// const Album = require('../../models/Album')
// const User = require('../../models/User')
// const ratingSchema = require('../../models/Album')

// describe('GET /album/:id', () => {

//   let album = null 

//   beforeEach(done => {
//     User.create({
//       username: 'Tom',
//       email: 'tom@email',
//       password: 'pass',
//       passwordConfirmation: 'pass'
//     })
//       .then(user => {
//         return Album.create([
//           {
//             id: 302127,
//             title: 'Discovery',
//             cover_medium: 'https://cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/250x250-000000-80-0-0.jpg',
//             genre_id: 113,
//             artist: 'Daft Punk',
//             users: user,
//             rating: [ratingSchema]
//           }
//         ])
//       })
//       .then(createdAlbum => {
//         album = createdAlbum[0] // <==== here is where we set that let abocve as the created animal, we can then access its id in the tests below
//         done()
//       })
//   })

//   afterEach(done => {
//     User.deleteMany()
//       .then(() => Album.deleteMany())
//       .then(() => done())
//   })

//   it('should return a 404 not found for an invalid album id', done => {
//     api.get('/api/album/1234')
//       .end((err, res) => {
//         expect(res.status).to.eq(404)
//         done()
//       })
//   })

//   it('should return a 200 response', done => {
//     api.get(`/api/album/${album._id}`) // <=== and using that animal we have created and stored in the requests
//       .end((err, res) => {
//         expect(res.status).to.eq(200)
//         done()
//       })
//   })

//   it('should return an object', done => {
//     api.get(`/api/album/${album._id}`) // <=== and using that animal we have created and stored in the requests
//       .end((err, res) => {
//         expect(res.body).to.be.an('object')
//         done()
//       })
//   })

//   it('should return the correct fields', done => {
//     api.get(`/api/album/${album._id}`) 
//       .end((err, res) => {
//         expect(res.body).to.contains.keys([
//           '_id',
//           'title',
//           'cover_medium',
//           'genre_id',
//           'artist',
//           'users',
//           'rating'
//         ])
//         done()
//       })
//   })

//   it('should return the correct data types', done => {
//     api.get(`/api/album/${album._id}`) 
//       .end((err, res) => {
//         expect(res.body._id).to.be.a('number')
//         expect(res.body.title).to.be.a('string')
//         expect(res.body.cover_medium).to.be.a('string')
//         expect(res.body.genre_id).to.be.a('number')
//         expect(res.body.artist).to.be.an('object')
//         expect(res.body.users).to.be.an('array')
//         expect(res.body.rating).to.be.an([ratingSchema])
//         done()
//       })
//   })

// })
