import React from 'react'
import { Link } from 'react-router-dom'
import Auth from '../../lib/auth'

class Home extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    if (Auth.isAuthenticated()) {
      this.props.history.push('/dashboard')
    }
  }

  render() {
    // this.getUserName()
    return (
      <section >
        <div className="splash">
          <div className="container-title">
            <p className="large-logo">
              rekordr
            </p>
            <p className="home-text">
              <Link to="/login">log in</Link> or <Link to="/register">sign up</Link> to discover how your collection stacks up
            </p>
          </div>
        </div>
      </section>
    )
  }
}
export default Home