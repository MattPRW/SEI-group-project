import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import ReactAudioPlayer from 'react-audio-player'
import 'bulma'
import './normalize.css'
import './skeleton.css'
import './style.scss'


import Navbar from './components/common/Navbar'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Profile from './components/auth/Profile'
import Dashboard from './components/auth/Dashboard'
import Home from './components/common/Home'
import AlbumSearch from './components/albums/AlbumSearch'
import AlbumsIndex from './components/albums/AlbumsIndex'

const App = () => (
  <BrowserRouter>
    <main>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={AlbumSearch} />
        <Route path="/albumsIndex" component={AlbumsIndex} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </main>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)