const axios = require('axios')

function proxySearch(req, res) {
  axios.get(`https://api.deezer.com/search/album/?q=${req.params.id}`
  )
    .then(list => res.status(202).json({ list }))
    .catch(err => console.log(err))
}

module.exports = {
  // proxySearch
}