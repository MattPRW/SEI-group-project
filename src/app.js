import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
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
import ShowUsers from './components/auth/ShowUsers'
import UserRecordBox from './components/auth/UserRecordBox'

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
        <Route path="/users" component={ShowUsers} />
        <Route path="/userRecordBox/:id" component={UserRecordBox} />
      </Switch>
    </main>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)