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
    axios.get('api/users', {
      headers: { 'Authorization': `Bearer ${Auth.getToken()}` }
    })
      .then(res => {
        this.setState({ users: res.data })
      })
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.state.users)
    if (!this.state.users) return null
    return (
      <section >
        <div>
          <h3>Other members</h3>
        </div>
        <div className="container flex-container">
          {this.state.users.map(user => (
            < UserCard key={user.id}
              {...user}
            />
          ))}
        </div>
      </section>
    )
  }

}
export default ShowUsers