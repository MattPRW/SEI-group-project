import React from 'react'
import axios from 'axios'

class Login extends React.Component {
  constructor() {
    super()
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