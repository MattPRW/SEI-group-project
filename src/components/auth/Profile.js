import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'

import ProfileForm from './ProfileForm'

class Profile extends React.Component {
  constructor() {
    super()
    this.state = {
      data: null,
      splashMessage: ''
    },
    this.formTitle = 'Update'
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount() {
    axios.get('/api/profile', {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.log('errors', err))
  }
  handleSubmit(e) {
    e.preventDefault()
    axios.put('/api/profile', this.state.data)
      .then(res => this.setState({ splashMessage: res.data.message, data: res.data }))
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
  }
  render() {
    console.log('rendering', this.state.data)
    if (!this.state.data) return null
    return (
      <>
        <ProfileForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          formTitle={this.formTitle}
          profile={this.state.data}
        />
      </>
    )
  }
}

export default Profile