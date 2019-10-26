import React from 'react'
import axios from 'axios'

class Register extends React.Component {
  constructor() {
    super()

  }

  handleSubmit(e) {
    e.preventDefault()

    axios.post('/api/register', this.state.data)
      .then(() => this.props.history.push('/login'))
      .catch(err => this.setState({ errors: err.response.data.errors }))
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
              <label className="label">Email*</label>
              <div className="control">
                <input
                  className="input"
                  name="Email"
                  placeholder="Email"
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
            <div className="field">
              <label className="label">Password Confirmation*</label>
              <div className="control">
                <input
                  className="input"
                  name="Password Confirmation"
                  placeholder="Password Confirmation"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Upload Photo</label>
              <div className="control">
                <input
                  className="input"
                  name="Photo"
                  placeholder="Photo"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Address</label>
              <div className="control">
                <input
                  className="input"
                  name="Address"
                  placeholder="Address"
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