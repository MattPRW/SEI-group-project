import React from 'react'

const SplashScreen = ({ message }) => (
  <section className="hero is-fullheight-with-navbar">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">{message}</h1>
      </div>
    </div>
  </section>
)
export default SplashScreen