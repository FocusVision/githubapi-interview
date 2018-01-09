import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import Users from './screens/users'

const App = () => (
  <Switch>
    <Route path="/" exact render={() => <Redirect to="/users" />} />
    <Route
      path="/users"
      render={props => {
        const queryParams = new URLSearchParams(props.location.search)

        return <Users {...props} query={queryParams} />
      }}
    />
  </Switch>
)

export default App
