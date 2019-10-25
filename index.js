const express = require('express')
const app = express()
const mongoose = require('mongoose')
const { dbURI, port } = require('./config/environment')
const bodyParser = require('body-parser')
const logger = require('./lib/logger')
const axios = require('axios')


mongoose.connect(dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, () => console.log('Mongo is connected')
)

app.use(bodyParser.json())
app.use(logger)

app.get('/myproxyroute', (req, res) => {
  axios.get('https://restcountries.eu/rest/v2/all')
    .then(console.log('getting data'))
    .then(res => res.status(200).json(res.data))
    .catch(err => res.json(err))
})


app.listen(port, () => console.log(`Up and running on port ${port}`))