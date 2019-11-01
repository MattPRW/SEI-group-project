import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
// import { Link } from 'react-router-dom'
import AlbumCard from '../albums/AlbumCard'
import ProfileCard from '../auth/ProfileCard'

class Dashboard extends React.Component {
  constructor() {
    super()
    this.state = {
      user: null,
      albumTracks: null,
      albumOnPlayer: null,
      songOnPlayer: ''
    }
    this.handleRemoveAlbum = this.handleRemoveAlbum.bind(this)
    this.handleToggleDropDown = this.handleToggleDropDown.bind(this)
    this.handlePlay = this.handlePlay.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  getUser() {
    axios.get('api/profile', {
      headers: { 'Authorization': `Bearer ${Auth.getToken()}` }
    })
      .then(res => {
        // console.log(res.data)
        this.setState({ user: res.data })
      })
      .catch(err => console.log(err))
  }
  inRekordBox(value) {
    if (this.state.user.rekordBox) return this.state.user.rekordBox.some(record => record.deezerId === value)
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

    if (!this.state.user) return null
    console.log('render state', this.state)
    return (
      <section >
        <div >
          <div className={this.state.user.rekordBox.length === 0 ? 'center-page container profile-card' : 'padding-top container profile-card'}>
            < ProfileCard 
              {...this.state.user}
            />
          </div>
          <div className="container flex-container">
            {this.state.user.rekordBox.map(album => (
              < AlbumCard key={album.deezerId}
                {...album}
                removeAlbum={this.handleRemoveAlbum}
                inRekordBox={this.inRekordBox(album.deezerId)}
                id={album.deezerId}
                albumTracks={this.state.albumTracks}
                albumOnPlayer={this.state.albumOnPlayer}
                songOnPlayer={this.state.songOnPlayer}
                play={this.handlePlay}
                toggleDropDown={this.handleToggleDropDown}
              />
            ))}
          </div>
        </div>
      </section>
    )
  }
}
export default Dashboard



