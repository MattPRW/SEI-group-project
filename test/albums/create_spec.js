// /* global api, describe, it, expect, beforeEach, afterEach */
// const Album = require('../../models/Album')
// const User = require('../../models/User')
// const jwt = require('jsonwebtoken')
// const { secret } = require('../../config/environment')


// const testAlbum = {
//   deezerId: '7460937',
//   title: 'Locks & Keys',
//   artist: 'Glyphs'
// }


// describe('post /albums', () => {

//   let token = null

//   beforeEach(done => {
//     User.create({
//       username: 'Tom',
//       email: 'tom@email',
//       password: 'pass',
//       passwordConfirmation: 'pass'
//     })
//       .then(user => {
//         token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' })
//         done()
//       })
//   })
//   afterEach(done => { 
//     User.deleteMany()
//       .then(() => Album.deleteMany())
//       .then(() => done())
//   })

//   it('should return a 401 response without a token', done => {
//     api.post('/api/albums')
//       .send(testAlbum)
//       .end((err, res) => {
//         expect(res.status).to.eq(401)
//         done()
//       })
//   })

//   it('should return a 201 response with a token', done => {
//     api.post('/api/albums')
//       .set('Authorization', `Bearer ${token}`)
//       .send(testAlbum)
//       .end((err, res) => {
//         expect(res.status).to.eq(201)
//         done()
//       })
//   })

//   it('should return a string', done => {
//     api.post('/api/albums')
//       .set('Authorization', `Bearer ${token}`)
//       .end((err, res) => {
//         expect(res.body).to.be.a('string')
//         done()
//       })
//   })

//   it('should return the correct fields', done => {
//     api.post('/api/albums')
//       .set('Authorization', `Bearer ${token}`)
//       .send(testAlbum)
//       .end((err, res) => {
//         expect(res.body).to.contains.keys([
//           '_id',
//           'title', 
//           'artist',
//           'rating',
//           'createdAt',
//           'updatedAt',
//           '__v'
//         ])
//         done()
//       })
//   }) 
  
//   it('should return the correct data types', done => {
//     api.post('/api/albums')
//       .set('Authorization', `Bearer ${token}`)
//       .send(testAlbum)
//       .end((err, res) => {
//         expect(res.body._id).to.be.a('string')
//         expect(res.body.title).to.be.a('string')
//         expect(res.body.artist).to.be.a('string')
//         expect(res.body.rating).to.be.an('array')
//         expect(res.body.createdAt).to.be.a('string')
//         expect(res.body.updatedAt).to.be.a('string')
//         expect(res.body.__v).to.be.a('number')
//         done()
//       })
//   })
// })