import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
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
    const albumId = parseInt(e.target.id) //need to parse button id as need to change data type from string to number for below filter to work
    let albumData = this.state.albums.data.filter(item => item.id === albumId)
    albumData = albumData[0]
    axios.post('/api/albums', albumData, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  inCollection(value) {
    return value.includes(Auth.getPayload().sub)
  }

  render() {
    // console.log(this.state)
    if (!this.state.albums) return null
    return (
      <section className="section">
        <div className="container ">
          <h3>Search for Artist or Album</h3>
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="twelve columns">

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
                coverImage={album.cover_medium}
              />
            ))}
        </div>
      </section>
    )
  }
}

export default AlbumSearch
