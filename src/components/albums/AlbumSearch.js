import React from 'react'
import axios from 'axios'


class AlbumSearch extends React.Component {
  constructor() {
    super()
    this.state = {
      data: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }
  handleChange(e) {
    const search = { ...this.state.search, [e.target.name]: e.target.value }
    this.setState({ search })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album/?q=${this.state.search.searchString}`
    )
      .then(res => this.setState({ data: res.data }))
      .catch(err => this.setState({ errors: err }))
  }

  render() {
    if (!this.state.data) return null
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="six columns">
              <label>Search for Artist or Album</label>
              <input onChange={this.handleChange} className="u-full-width" type="text" placeholder="Search for Albums..." name="searchString" />
            </div>
          </div>
          <button className="button-primary" type="submit" value="Submit">Submit</button>
        </form>
        <div className="album_cards">
          {this.state.data.data &&
            this.state.data.data.map(album => {
              console.log('here')
              return <div className="album_card" key={album.id}>
                <h5>{album.title}</h5>
                <h6>{album.artist.name}</h6>
                <img src={album.cover_medium}></img>
              </div>
            }
            )}

        </div>
      </div >
    )
  }
}

export default AlbumSearch
