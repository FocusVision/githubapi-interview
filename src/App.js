import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import Users from './screens/users'

const App = () => (
  <Switch>
    <Route path="/" exact render={() => <Redirect to="/users" />} />
    <Route path="/users" component={Users} />
  </Switch>
)

export default App
