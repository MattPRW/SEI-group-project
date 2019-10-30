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
      user: null
    }
    this.handleRemoveAlbum = this.handleRemoveAlbum.bind(this)
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

  render() {

    if (!this.state.user) return null
    console.log('render state', this.state)
    return (
      <section >
        <div>
          <div className="container">
            < ProfileCard
              { ...this.state.user }
            />
          </div>
          <div className="container flex-container">
            {this.state.user.rekordBox.map(album => (
              < AlbumCard key={album.deezerId}
                {...album}
                removeAlbum={this.handleRemoveAlbum}
                inRekordBox={this.inRekordBox(album.deezerId)}
                id={album.deezerId}
              />
            ))}
          </div>
        </div>
      </section>
    )
  }
}

export default Dashboard




// handleRemoveAlbum(e) {    // creates album in DB
//   const albumId = parseInt(e.target.id)//need to parse button id as need to change data type from string to number for below filter to work
//   let albumData = this.state.user.rekordBox.filter(item => item.deezerId === albumId)
//   albumData = albumData[0]._id
//   axios.delete(`/api/albums/${albumData}`, {
//     headers: { Authorization: `Bearer ${Auth.getToken()}` }
//   })
//     .then(() => this.getRekordBox())
//     .catch(err => console.log(err))
// }


// removeAlbum={this.handleRemoveAlbum}