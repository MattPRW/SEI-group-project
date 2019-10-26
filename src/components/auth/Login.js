import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'

class Login extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        email: '',
        password: ''
      },
      error: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data, error: '' })
  }
  handleSubmit(e) {
    e.preventDefault()
    axios.post('api/login', this.state.data)
      .then(res => { 
        Auth.setToken(res.data.token)
        this.props.history.push('/search')
      })
      .catch(() => this.setState({ error: 'Incorrect Credentials' }))
  }
  render() {
    return (
      <section className="section">
        <div className="container">
          <form>
            <h1>Register</h1>
            <div className="field">
              <label className="label">Username*</label>
              <div className="control">
                <input
                  className="input"
                  name="username"
                  placeholder="Username"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Password*</label>
              <div className="control">
                <input
                  className="input"
                  name="Password"
                  placeholder="Password"
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