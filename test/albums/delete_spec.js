/* global api, describe, it, expect, beforeEach, afterEach */

const Album = require('../../models/Album')
const User = require('../../models/User')
const jwt = require('jsonwebtoken')
const { secret } = require('../../config/environment')

describe('DELETE profile/albums/:id', () => {
  let token = null
  const album = null

  beforeEach(done => {
    User.create({
      username: 'Matt',
      email: 'matt@email',
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
    api.delete(`/api/albums/${album._id}`)
      .end((err, res) => {
        expect(res.status).to.eq(401)
        done()
      })
  })
  it('should return a 204 response with a token', done => {
    api.delete(`/api/albums/${album._id}`)
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        expect(res.status).to.eq(204)
        done()
      })
  })

  it('should return no data', done => {
    api.delete(`/api/albums/${album._id}`)
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        expect(res.body).to.deep.eq({})
        done()
      })
  })
})
