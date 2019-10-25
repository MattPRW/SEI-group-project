import React from 'react'
import axios from 'axios'


class AlbumSearch extends React.Component {
  constructor() {
    super()
    this.state = {
      search: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }
  handleChange(e) {
    const search = { ...this.state.search, [e.target.name]: e.target.value }
    this.setState({ search })
  }
  componentDidMount() {
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album/?q=${this.state.search.searchString}`
    )
      .then(res => this.setState({ albums: res.data }))
      .catch(err => this.setState({ errors: err }))
  }

  render() {
    // if (!this.state.data) return null
    console.log(this.state)
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
        <div className="cards">
          {/* {this.state.albums.map(() => {
          })} */}

        </div>
      </div>
    )
  }
}

export default AlbumSearch
