import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
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

export default Home