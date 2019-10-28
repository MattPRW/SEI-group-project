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
    axios.get('api/albums')
      .then(res => this.setState({ albums: res.data }))
      .catch(err => console.log(err))
  }
  render() {
    console.log(this.state)
    if (!this.state.albums) return null
    return (
      <section className="section">
        <div className="container">
          <h2>All albums added by users:</h2>
        </div>
        <div className="container flex-container">
          {this.state.albums &&
            this.state.albums.map(album => (
              < AlbumCard key={album.deezer_id}
                {...album}
              />
            ))}
        </div>
      </section>
    )
  }
}

export default AlbumsIndex