import React from 'react'
import axios from 'axios'

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

  handleSubmit(e) {
    e.preventDefault()
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album/?q=${this.state.search.searchString}`
    )
      .then(res => this.setState({ albums: res.data }))
      .catch(err => this.setState({ errors: err }))
  }
  handleAddAlbum(e) {
    const albumId = parseInt(e.target.id)
    const album = this.state.albums.data.filter(item => item.id === albumId)
    this.setState({ albumData: album })
  }

  render() {
    console.log(this.state.albumData)
    if (!this.state.albums) return null
    return (
      <div>
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="six columns">
                <label>Search for Artist or Album</label>
                <input onChange={this.handleChange} className="u-full-width" type="text" placeholder="Search for Albums..." name="searchString" />
              </div>
            </div>
            <button className="button-primary" type="submit" value="Submit">Submit</button>
          </form>
        </div>
        <div className="container flex-container">
          {this.state.albums.data &&
            this.state.albums.data.map(album => {
              return <div onClick={this.handleAddAlbum} className="one-third column" name={album.artist} value={album.id} key={album.id}>
                <div>
                  <h5>{album.title}</h5>
                  <h6>{album.artist.name}</h6>
                </div>
                <div className="image">
                  <img src={album.cover_medium}></img>
                </div>
                <div>
                  <button id={album.id} name={album.artist} className="button">Add to collection</button>
                </div>
              </div>
            }
            )}
        </div>
      </div>
    )
  }
}

export default AlbumSearch
