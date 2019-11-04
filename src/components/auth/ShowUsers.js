import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
import UserCard from '../auth/UserCard'

class ShowUsers extends React.Component {
  constructor() {
    super()
    this.state = {
      users: null
    }
  }

  componentDidMount() {
    this.getUsers()
  }

  getUsers() {
    axios.get('/api/users', {
      headers: { 'Authorization': `Bearer ${Auth.getToken()}` }
    })
      .then(res => {
        this.setState({ users: res.data }, this.getRekordBox())
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
  calculateCommonAlbums(arg1, arg2) {
    return arg1.filter(album => arg2.map(album1 => album1.deezerId).includes(album.deezerId)).length
  }

  render() {
    console.log(this.state)
    // this.state.rekordBox && (console.log('albums in common', this.state.rekordBox.filter(users => users.some(user => user._id === '5db815bea3593964da47e9ea'))))
    if (!this.state.users) return null
    return (
      <section className="padding-top ">
        <div className="container">
          <h3>Check out other members Rekord Boxes</h3>
        </div>
        <div className="container flex-container">
          {this.state.users.filter(user => user._id !== Auth.getPayLoad().sub).map(user => (
            < UserCard key={user.id}
              {...user}
              rekordBox1={this.state.rekordBox}
              calculateCommonAlbums={this.calculateCommonAlbums}
            />
          ))}
        </div>
      </section>
    )
  }

}
export default ShowUsers