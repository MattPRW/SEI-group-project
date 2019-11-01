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

  render() {
    console.log(this.state)
    if (!this.state.users) return null
    return (
      <section className="padding-top ">
        <div>
          <h3>Check out other members Rekord Boxes</h3>
        </div>
        <div className="container flex-container">
          {this.state.users.map(user => (
            < UserCard key={user.id}
              {...user}
              rekordBox1={this.state.rekordBox}
            />
          ))}
        </div>
      </section>
    )
  }

}
export default ShowUsers