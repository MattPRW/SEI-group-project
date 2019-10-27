import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Home = () => (
  <section >
    <div className="splash">
      <div className="container">
        <p className="large-logo">
          rekordr
        </p>
        <p>
          <Link to="/login">login</Link> or <Link to="/register">signup</Link> to discover how your collection stacks up
        </p>
      </div>
    </div>
  </section>
)

export default Home