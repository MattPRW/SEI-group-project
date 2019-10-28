import React from 'react'
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'
import Auth from '../../lib/auth'

class Navbar extends React.Component {
  constructor() {
    super()
    this.state = {
      navOpen: false,
      username: ''
    }
    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  toggleNavbar() {
    this.setState({ navOpen: !this.state.navOpen })
  }

  handleLogout() {
    Auth.logout()
    this.props.history.push('/')
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ navOpen: false })
      this.getUserName()
    }
  }

  getUserName(){
    axios.get('api/profile', {
      headers: { 'Authorization': `Bearer ${Auth.getToken()}` }
    })
      .then(res => {
        this.setState({ username: res.data.username })
      })
  }

  render() {
    // this.getUserName()
    return (
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            {!Auth.isAuthenticated() && <Link className="navbar-item logo" to="/">rekordr</Link>}
            {Auth.isAuthenticated() && <Link className="navbar-item logo" to="/dashboard">rekordr</Link>}
            <a
              className={`navbar-burger ${this.state.navOpen ? 'is-active' : ''}`}
              onClick={this.toggleNavbar}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className={`navbar-menu ${this.state.navOpen ? 'is-active' : ''}`}>
            <div className="navbar-end">
              {!Auth.isAuthenticated() && <Link className="navbar-item" to="/login">Login</Link>}
              {!Auth.isAuthenticated() && <Link className="navbar-item" to="/register">Register</Link>}
              {Auth.isAuthenticated() && <Link className="navbar-item" to="/search">Search albums</Link>}
              {Auth.isAuthenticated() && <Link className="navbar-item" to="/albumsIndex">Browse Albums</Link>}
              {Auth.isAuthenticated() && <a onClick={this.handleLogout} className="navbar-item">Logout</a>}
              {Auth.isAuthenticated() && <h6 className="navbar-item logged-in"> Logged in as {this.state.username} </h6>}
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default withRouter(Navbar)