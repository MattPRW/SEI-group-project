import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import axios from 'axios'
import './normalize.css'
import './skeleton.css'


<<<<<<< HEAD
import AlbumSearch from './components/albums/AlbumSearch'

const App = () => (
=======
Const App = () => (
>>>>>>> development
  <BrowserRouter>
    <main>
      <Switch>
        <Route path="/" component={AlbumSearch} />
      </Switch>
    </main>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)