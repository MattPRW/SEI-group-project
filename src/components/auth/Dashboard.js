import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
// import { Link } from 'react-router-dom'
import AlbumCard from '../albums/AlbumCard'
import UserCard from '../auth/UserCard'

class Dashboard extends React.Component {
  constructor() {
    super()
    this.state = {
      user: null
    }
  }

  componentDidMount() {
    this.getUser()
  }

  // getAlbums() {
  //   axios.get('/api/albums')
  //     .then(res => this.setState({ albums: res.data }))
  // }

  // getAndFilterUserAlbums() {
  //   if (!this.state.albums) return []
  //   return this.state.albums.filter(album => album.users.filter(_id => _id === this.state.user._id))
  // }

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

  render() {

    if (!this.state.user) return null
    console.log(this.state.user)
    return (
      <section >
        <div>
          <div className="container">
            < UserCard
              { ...this.state.user }
            />
          </div>
          <div className="container flex-container">
            {this.state.user.rekordBox.map(album => (
              < AlbumCard key={album.deezerId}
                {...album}
              />
            ))}
          </div>
        </div>
      </section>
    )
  }
}

export default Dashboard