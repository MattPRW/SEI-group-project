import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
import { Link } from 'react-router-dom'

class Dashboard extends React.Component {
  constructor() {
    super()
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    this.getUser()
  }

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
    return (
      <section >
        <div>
          <div className="container">
            <h3>
              {`${this.state.user.username}'s`} Record Box
            </h3>
            <img src={this.state.user.image}></img>
            <button>
              <Link to="/Profile">Edit Profile Details</Link>
            </button>
          </div>
        </div>
      </section>
    )
  }
}

export default Dashboard