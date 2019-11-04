const axios = require('axios')

function proxySearch(req, res) {
  // console.log(req.params.id)
  axios.get(`https://api.deezer.com/search/album/?q=${req.params.id}`
  )
 
    .then(response => res.status(201).json(response.data))
    .catch(err => res.json(err))
}

function proxyRetrieveTracks(req, res) {
  axios.get(`https://api.deezer.com/album/${req.params.id}/tracks`)
    .then(response => res.status(201).json( response.data ))
    .catch(err => res.json(err))
}

module.exports = {
  proxySearch, 
  proxyRetrieveTracks
}