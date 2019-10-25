import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import axios from 'axios'


onst App = () => (
  <BrowserRouter>
    <main>
      <Switch>
        <Route path="/albumSearch" component={Profile} />
      </Switch>
    </main>
  </BrowserRouter>
)


class AlbumSearch extends React.Component {
  constructor() {
    super()
    this.state = {
      data: null
    }
  }
  componentDidMount() {
  }
  render() {
    // if (!this.state.data) return null
    return (
      <div>
        <h1>Hello</h1>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)