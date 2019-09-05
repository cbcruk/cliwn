import React from 'react'
import { Router } from '@reach/router'
import { Provider } from 'react-redux'
import Home from './views/Home'
import List from './views/List'
import Detail from './views/Detail'
import NotFound from './views/NotFound'
import store from './store'

const App = () => (
  <Provider store={store}>
    <Router>
      <Home path="/" />
      <List path="/:page" />
      <Detail path="/:page/:id" />
      <NotFound path="*" />
    </Router>
  </Provider>
)

export default App
