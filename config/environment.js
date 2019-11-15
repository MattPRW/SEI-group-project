// const dbURI = 'mongodb://localhost/rekordr'

const dbURI = process.env.MONGODB_URI || `mongodb://localhost/rekordr${process.env.NODE_ENV || 'dev'}`
const port = process.env.PORT || 4000
const secret = process.env.SECRET || 'Shhhh it\'s a secret'

module.exports = {
  dbURI,
  secret,
  port
}


