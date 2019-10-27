import React from 'react'
import axios from 'axios'

import SplashScreen from '../common/SplashScreen'
import ProfileForm from './ProfileForm'



class Register extends React.Component {
  constructor() {
    super()
    this.state = {
      data: {
        username: ' ', //props and non-falsey value of ' ' is necessary so that these fields would show up on ProfileForm for login
        email: ' ', 
        password: ' ',
        passwordConfirmation: ' ',
        photo: ' ',
        address: ' '
      },
      loading: false,
      splashMessage: 'You\'re all set. taking you to login page.'
    }
    this.formTitle = 'register'

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }
  toggleLoading() {
    const loading = true
    this.setState({ loading })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/api/register', this.state.data)
      .then(res => this.setState({ splashMessage: res.data.message }))
      .then(() => {
        this.toggleLoading()
        setTimeout(() => this.props.history.push('/login'), 1000)
      })
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
  }

  render() {
    if (this.state.loading) return (
      <SplashScreen
        message={this.state.splashMessage}
      />
    )
    return (
      <ProfileForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        profile={this.state.data}
        formTitle={this.formTitle}
      />
    )
  }
}

export default Register