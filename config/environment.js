// const dbURI = 'mongodb://localhost/rekordr'

const dbURI = process.env.MONGGODB_URI || `mongodb://localhost/rekordr${process.env.NODE_ENV || 'dev'}`
const port = 4000
const secret = 'Shhhh it\'s a secret'

module.exports = {
  dbURI,
  secret,
  port
}


