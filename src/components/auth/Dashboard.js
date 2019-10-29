import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
import { Link } from 'react-router-dom'
import AlbumCard from '../albums/AlbumCard'

class Dashboard extends React.Component {
  constructor() {
    super()
    this.state = {
      user: {},
      albums: []
    }
  }

  componentDidMount() {
    this.getUser()
  }

  getAlbums() {
    axios.get('/api/albums')
      .then(res => this.setState({ albums: res.data }))
  }

  getAndFilterUserAlbums() {
    if (!this.state.albums) return []
    return this.state.albums.filter(album => album.users.includes(this.state.user._id))
  }

  getUser() {
    axios.get('api/profile', {
      headers: { 'Authorization': `Bearer ${Auth.getToken()}` }
    })
      .then(res => {
        // console.log(res.data)
        this.setState({ user: res.data }, this.getAlbums)
      })
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.state)
    return (
      <section >
        <div>
          <div className="container">
            <h3>
              {`${this.state.user.username}'s`} Record Box
            </h3>
            <img className="user-image" src={this.state.user.image}></img>
            <button>
              <Link to="/Profile">Edit Profile Details</Link>
            </button>
          </div>
          <div className="container">
            <h2>{`Your Albums: ${this.getAndFilterUserAlbums().length}`}</h2>
          </div>
          <div className="container flex-container">
            {this.state.albums &&
              this.getAndFilterUserAlbums().map(album => (
                < AlbumCard key={album.deezer_id}
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