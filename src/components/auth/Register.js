import React from 'react'
import axios from 'axios'

import SplashScreen from '../common/SplashScreen'



class Register extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {},
      loading: false,
      splashMessage: 'You\'re all set. taking you to login page.'
    }

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
      // .then(() => this.props.history.push('/login'))
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
      <section className="section">
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <h1>Register</h1>
            <div className="field">
              <label className="label">Username*</label>
              <div className="control">
                <input
                  className="input"
                  name="username"
                  placeholder="Username"
                  onChange={this.handleChange}
                />
              </div>
            </div>
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
            <div className="field">
              <label className="label">Password Confirmation*</label>
              <div className="control">
                <input
                  className="input"
                  name="passwordConfirmation"
                  placeholder="Password Confirmation"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Upload Photo</label>
              <div className="control">
                <input
                  className="input"
                  name="photo"
                  placeholder="Photo"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Address</label>
              <div className="control">
                <input
                  className="input"
                  name="address"
                  placeholder="Address"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <button type="submit">Register</button>
          </form>
        </div>
      </section>
    )
  }
}

export default Register