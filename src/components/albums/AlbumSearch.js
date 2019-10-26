import React from 'react'
import axios from 'axios'

import AlbumCard from './AlbumCard'

class AlbumSearch extends React.Component {
  constructor() {
    super()
    this.state = {
      albums: [],
      albumData: null

    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleAddAlbum = this.handleAddAlbum.bind(this)

  }
  handleChange(e) {
    const search = { ...this.state.search, [e.target.name]: e.target.value }
    this.setState({ search })
  }

  handleSubmit(e) {  // submitting deezer search
    e.preventDefault()
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album/?q=${this.state.search.searchString}`
    )
      .then(res => this.setState({ albums: res.data }))
      .catch(err => this.setState({ errors: err }))
  }

  handleAddAlbum(e) {    // creates album in DB
    const albumId = parseInt(e.target.id) //need to parse buttoon id as need to change data type from string to number for below filter to work
    const albumData = this.state.albums.data.filter(item => item.id === albumId)
    axios.post('/api/albums', albumData)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  render() {
    // console.log(this.state.albumData)
    if (!this.state.albums) return null
    return (
      <div>
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="twelve columns">
                <label>Search for Artist or Album</label>
                <input onChange={this.handleChange} className="u-full-width" type="text" placeholder="Search for Albums..." name="searchString" />
              </div>
            </div>
            <button className="button-primary" type="submit" value="Submit">Submit</button>
          </form>
        </div>
        <div className="container flex-container">
          {this.state.albums.data &&
            this.state.albums.data.map(album => (
              < AlbumCard key={album.id}
                {...album}
                handleAddAlbum={this.handleAddAlbum}
              />
            ))}
        </div>
      </div>
    )
  }
}

export default AlbumSearch
