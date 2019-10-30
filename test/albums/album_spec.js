/* global api, describe, it, expect, beforeEach, afterEach */
const Album = require('../../models/Album')
const User = require('../../models/User')
// const ratingSchema = require('../../models/Album')

describe('GET /album/:id', () => {

  let album = null

  beforeEach(done => {
    User.create({
      username: 'Matt',
      email: 'matt@email',
      password: 'pass',
      passwordConfirmation: 'pass'
    })
      .then(user => {
        return Album.add([
          {
            _id: '7460937',
            title: 'Locks & Keys',
            genre_id: '106',
            cover_medium: 'https://e-cdns-images.dzcdn.net/images/cover/efb5ea65de1516c592ebdf44235ff608/250x250-000000-80-0-0.jpg',
            artist_name: 'Glyphs',
            user: user
            // rating: [ratingSchema]
          }
        ])
      })
      .then(addedAlbum => {
        album = addedAlbum[0]
        done()
      })
  })

  afterEach(done => {
    User.deleteMany()
      .then(() => Album.deleteMany())
      .then(() => done())
  })

  it('should return a 404 not found for an invalid album id', done => {
    api.get('/api/album/7460937')
      .end((err, res) => {
        expect(res.status).to.eq(404)
        done()
      })
  })

  it('should return a 200 response', done => {
    api.get(`/api/album/${album._id}`)
      .end((err, res) => {
        expect(res.status).to.eq(200)
        done()
      })
  })

  // it('should return an object', done => {
  //   api.get(`/api/album/${album._id}`)
  //     .end((err, res) => {
  //       expect(res.body).to.be.an('object')
  //       done()
  //     })
  // })

  // it('should return the correct fields', done => {
  //   api.get(`/api/album/${album._id}`)
  //     .end((err, res) => {
  //       expect(res.body).to.contains.keys([
  //         'id',
  //         'title',
  //         'cover_medium',
  //         'genre_id',
  //         'artist_name',
  //         'users'
  //         // 'rating'
  //       ])
  //       done()
  //     })
  // })

  // it('should return the correct data types', done => {
  //   api.get(`/api/album/${album._id}`)
  //     .end((err, res) => {
  //       expect(res.body._id).to.be.a('number')
  //       expect(res.body.title).to.be.a('string')
  //       expect(res.body.cover_medium).to.be.a('string')
  //       expect(res.body.genre_id).to.be.a('number')
  //       expect(res.body.artist_name).to.be.an('object')
  //       // expect(res.body.user).to.be.an('array')
  //       // expect(res.body.rating).to.be.a('number')
  //       done()
  //     })
  // })
})
