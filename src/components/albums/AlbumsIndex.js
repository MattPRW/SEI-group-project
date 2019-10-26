import React from 'react'
import axios from 'axios'

import AlbumCard from './AlbumCard'

class AlbumsIndex extends React.Component {
  constructor() {
    super()
    this.state = {
      albums: null
    }
  }
  componentDidMount() {
    axios.get('/api/albums')
      .then(res => this.setState({ albums: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.state)
    if (!this.state.albums) return null
    return (
      <div className="section">
        <h1>All albums added by users:</h1>
        <div className="container flex-container">
          {this.state.albums &&
            this.state.albums.map(album => (
              < AlbumCard key={album.id}
                {...album}
              />
            ))}
        </div>
      </div>
    )
  }
}

export default AlbumsIndex