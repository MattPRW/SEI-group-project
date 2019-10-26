import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import axios from 'axios'
import './normalize.css'
import './skeleton.css'
import './style.scss'

import AlbumSearch from './components/albums/AlbumSearch'
import AlbumsIndex from './components/albums/AlbumsIndex'


const App = () => (
  <BrowserRouter>
    <main>
      <Switch>
        <Route path="/index" component={AlbumsIndex} />
        <Route path="/" component={AlbumSearch} />
      </Switch>
    </main>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)