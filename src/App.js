import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Users from './components/Users'

const App = () => (
  <Switch>
    <Route path="/" exact>
      <Redirect to="/users" />
    </Route>
    <Route path="/users">
      <Users />
    </Route>
  </Switch>
)

export default App
