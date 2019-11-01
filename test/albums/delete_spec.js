/* global api, describe, it, expect, beforeEach, afterEach */

const Album = require('../../models/Album')
const User = require('../../models/User')
const jwt = require('jsonwebtoken')
const { secret } = require('../../config/environment')

describe('DELETE profile/albums/:id', () => {
  let token = null
  let album = null

  beforeEach(done => {
    User.create({
      username: 'Tom',
      email: 'tom@email',
      password: 'pass',
      passwordConfirmation: 'pass'
    })
      .then(user => {
        token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' }) 
        return Album.create({
          deezerId: '7460937',
          title: 'Locks & Keys',
          artist: 'Glyphs'
        })
      })
      .then(createdAlbum => {
        album = createdAlbum 
        done()
      })
  })

  afterEach(done => { 
    User.deleteMany()
      .then(() => Album.deleteMany())
      .then(() => done())
  })
  it('should return a 401 response without a token', done => {
    api.delete(`/api/profile/albums/${album._id}`)
      .end((err, res) => {
        expect(res.status).to.eq(401)
        done()
      })
  })
  it('should return a 202 response with a token', done => {
    api.delete(`/api/profile/albums/${album._id}`)
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        expect(res.status).to.eq(202)
        done()
      })
  })

  it('should return no data', done => {
    api.delete(`/api/profile/albums/${album._id}`)
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        expect(res.body.users).to.be.an('array').that.is.empty
        done()
      })
  })
})
