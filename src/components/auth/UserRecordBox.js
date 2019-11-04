import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
import AlbumCard from '../albums/AlbumCard'

class Dashboard extends React.Component {
  constructor() {
    super()
    this.state = {
      userId: null,
      user: null,
      rekordBox: null,
      albumTracks: null,
      albumOnPlayer: null,
      songOnPlayer: ''

    }
    this.handleAddAlbum = this.handleAddAlbum.bind(this)
    this.handleRemoveAlbum = this.handleRemoveAlbum.bind(this)
    this.handleToggleDropDown = this.handleToggleDropDown.bind(this)
    this.handlePlay = this.handlePlay.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  getUser() { // getting the profile of the visited user
    axios.get(`/api/users/${this.props.match.params.id}`, {
      headers: { 'Authorization': `Bearer ${Auth.getToken()}` }
    })
      .then(res => {
        this.setState({ user: res.data }, this.getRekordBox())
      })
      .catch(err => console.log(err))
  }

  getRekordBox() { // getting the rekordBox of visitor
    axios.get('/api/profile', {
      headers: { 'Authorization': `Bearer ${Auth.getToken()}` }
    })
      .then(res => this.setState({ rekordBox: res.data.rekordBox }))
      .catch(err => console.log('errors', err))
  }

  inRekordBox(value) {
    if (this.state.rekordBox) return this.state.rekordBox.some(record => record.deezerId === value)
  }

  handleAddAlbum(e) {    // looks for existing album in local DB or creates one from deezer DB if not found in local DB
    const albumId = parseInt(e.target.id) //need to parse button id as need to change data type from string to number for below filter to work
    const albumData = this.state.user.rekordBox.find(item => item.deezerId === albumId)
    console.log(albumId, albumData)
    axios.post('/api/albums', albumData, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(() => this.getRekordBox())
      .catch(err => console.log(err))
  }
  handleRemoveAlbum(e) {    // creates album in DB
    const albumId = parseInt(e.target.id)//need to parse button id as need to change data type from string to number for below filter to work
    console.log(albumId)
    const albumData = this.state.user.rekordBox.find(item => item.deezerId === albumId)
    axios.delete(`/api/albums/${albumData._id}`, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(() => this.getUser())
      .catch(err => console.log(err))
  }
  // music player functions

  handleToggleDropDown(e) {
    console.log(e.target.value)
    this.state.albumOnPlayer !== parseInt(e.target.value) ? this.setState({ albumOnPlayer: parseInt(e.target.value) }, this.getTracks(e.target.value)) : this.setState({ albumOnPlayer: 0 })
  }

  getTracks(arg) {
    axios.get(`/api/proxyrequest/albumtracks/${arg}`)
      .then(res => this.setState({ albumTracks: res.data.data }))
      .catch(err => console.log(err))
  }

  handlePlay(e) {
    console.log('clicked song', e.target.id)
    this.setState({ songOnPlayer: e.target.id })
  }

  render() {

    if (!this.state.user && !this.state.rekordBox) return null
    console.log(this.state)
    return (
      <section className="padding-top">
        <div>
          <div className={this.state.user.rekordBox.length === 0 ? 'center-page container' : 'container'}>
            < h3 > {`${this.state.user.username}'s record box`}</h3>
            <p className="title-size">{`...has ${this.state.user.rekordBox.length} records in it`}</p>
          </div>
          <div className="container flex-container">
            {this.state.user.rekordBox.map(album => (
              < AlbumCard key={album.deezerId}
                {...album}
                id={album.deezerId}
                albumTracks={this.state.albumTracks}
                albumOnPlayer={this.state.albumOnPlayer}
                songOnPlayer={this.state.songOnPlayer}
                inRekordBox={this.inRekordBox(album.deezerId)}
                addAlbum={this.handleAddAlbum}
                removeAlbum={this.handleRemoveAlbum}
                play={this.handlePlay}
                toggleDropDown={this.handleToggleDropDown}
              />
            ))}
          </div>
        </div >
      </section >
    )
  }
}

export default Dashboard