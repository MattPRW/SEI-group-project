import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'

import SplashScreen from '../common/SplashScreen'
import ProfileForm from './ProfileForm'

class Login extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        email: ' ', //props and non-falsey value of ' ' is necessary so that these fields would show up on ProfileForm for login
        password: ' '
      },
      error: '',
      loading: false,
      splashMessage: 'Welcome back!'
    }
    this.formTitle = 'Login'

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data, error: '' })
  }
  toggleLoading() {
    const loading = true
    this.setState({ loading })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('api/login', this.state.data)
      .then(res => {
        Auth.setToken(res.data.token)
        this.setState({ splashMessage: res.data.message })
        this.toggleLoading()
        console.log(this.state.splashMessage)
        setTimeout(() => this.props.history.push('/search'), 1000)
      })
      .catch(() => this.setState({ error: 'Incorrect Credentials' }))
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
        formTitle={this.formTitle}
        profile={this.state.data}
      />
    )
  }
}

export default Login