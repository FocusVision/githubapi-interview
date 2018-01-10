import React, { Component } from 'react'
import request from '../../utils/api'

class User extends Component {
  state = {
    loading: false,
    user: {},
    repos: []
  }

  componentDidMount() {
    this.fetchData(this.props.match.params.login)
  }

  componentWillReceiveProps({ match: { params: { login: nextLogin } } }) {
    const { match: { params: { login: currentLogin } } } = this.props

    if (currentLogin !== nextLogin) {
      this.fetchData(nextLogin)
    }
  }

  fetchData = login => {
    // Fetch the user and the user's repos using the github API.
    // The `request` function imported above will help build the base URL and
    // Auth header for you.
  }

  render() {
    const { loading, user, repos } = this.state

    if (loading) {
      return null
    }

    return (
      <div>
        This is where you will write stuff for {this.props.match.params.login}'s
        profle
      </div>
    )
  }
}

export default User
