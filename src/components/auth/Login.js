import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'

import SplashScreen from '../common/SplashScreen'

class Login extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        email: '',
        password: ''
      },
      error: '',
      loading: false,
      splashMessage: 'Welcome back!'
    }


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
        // console.log(this.state.splashMessage)
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
      <section className="section">
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <h1>Login</h1>
            <div className="field">
              <label className="label">Email*</label>
              <div className="control">
                <input
                  className="input"
                  name="email"
                  placeholder="Email"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Password*</label>
              <div className="control">
                <input
                  className="input"
                  name="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </section>
    )
  }
}

export default Login