import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

const App = () => (
  <Switch>
    <Route path="/" exact render={() => <Redirect to="/users" />} />
  </Switch>
)

export default App
