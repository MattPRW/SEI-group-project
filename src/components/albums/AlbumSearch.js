import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
import AlbumCard from './AlbumCard'
import { Link } from 'react-router-dom'


class AlbumSearch extends React.Component {
  constructor() {
    super()
    this.state = {
      albums: [],
      rekordBox: null,
      albumData: null,
      albumTracks: null,
      songOnPlayer: null,
      albumOnPlayer: 0
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleAddAlbum = this.handleAddAlbum.bind(this)
    this.handleRemoveAlbum = this.handleRemoveAlbum.bind(this)
    this.handleToggleDropDown = this.handleToggleDropDown.bind(this)
    this.handlePlay = this.handlePlay.bind(this)

  }
  getRekordBox() {
    axios.get('api/profile', {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => this.setState({ rekordBox: res.data.rekordBox }))
      .catch(err => console.log('errors', err))
  }

  handleChange(e) {
    const search = { ...this.state.search, [e.target.name]: e.target.value }
    this.setState({ search })
  }

  handleSubmit(e) {  // submitting deezer search
    e.preventDefault()
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album/?q=${this.state.search.searchString}`
    )
      .then(res => this.setState({ albums: res.data }, this.getRekordBox()))
      .catch(err => this.setState({ errors: err }))
  }

  handleAddAlbum(e) {    // creates album in DB
    const albumId = parseInt(e.target.id) //need to parse button id as need to change data type from string to number for below filter to work
    let albumData = this.state.albums.data.filter(item => item.id === albumId)
    albumData = albumData[0]
    axios.post('/api/albums', albumData, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(() => this.getRekordBox())
      .catch(err => console.log(err))
  }
  handleRemoveAlbum(e) {    // creates album in DB
    const albumId = parseInt(e.target.id)//need to parse button id as need to change data type from string to number for below filter to work
    let albumData = this.state.rekordBox.filter(item => item.deezerId === albumId)
    albumData = albumData[0]._id
    axios.delete(`/api/albums/${albumData}`, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(() => this.getRekordBox())
      .catch(err => console.log(err))
  }
  inRekordBox(value) {
    if (this.state.rekordBox) return this.state.rekordBox.some(record => record.deezerId === value)
  }
  handleToggleDropDown(e) {
    console.log(e.target.value)
    this.state.albumOnPlayer !== parseInt(e.target.value) ? this.setState({ albumOnPlayer: parseInt(e.target.value) }, this.getTracks(e.target.value)) : this.setState({ albumOnPlayer: 0 })
  }

  getTracks(value) {
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${value}/tracks`)
      .then(res => this.setState({ albumTracks: res.data.data }))
      .catch(err => console.log(err))
  }

  handlePlay(e) {
    console.log('clicked song', e.target.id)
    this.setState({ songOnPlayer: e.target.id })
  }

  render() {
    if (!this.state.albums && !this.state.rekordBox) return null
    console.log(this.state)
    return (
      <section className="section">
        <div className={this.state.albums.length === 0 ? 'no-results' : ''}>
          <div className="container">
            <h3>Search for Artist or Album</h3>
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="twelve columns">
                  <input onChange={this.handleChange} className="u-full-width" type="text" placeholder="Search for Albums..." name="searchString" />
                </div>
              </div>
              <button className="button-primary" type="submit" value="Submit">Submit</button>
              <Link to="/Dashboard" className="button" type="submit" value="Submit">Return to Profile</Link>
            </form>
          </div>
        </div>
        <div className="container flex-container" >
          {this.state.albums.data &&
            this.state.albums.data.map(album => (
              < AlbumCard key={album.id}
                {...album}
                coverImage={album.cover_medium}
                inRekordBox={this.inRekordBox(album.id)}
                songOnPlayer={this.state.songOnPlayer}
                albumOnPlayer={this.state.albumOnPlayer}
                addAlbum={this.handleAddAlbum}
                removeAlbum={this.handleRemoveAlbum}
                albumTracks={this.state.albumTracks}
                toggleDropDown={this.handleToggleDropDown}
                play={this.handlePlay}
              />
            ))}
        </div>
      </section>
    )
  }
}

export default AlbumSearch
