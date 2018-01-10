import React, { Component } from 'react'
import request from '../../utils/api'
import RepoList from '../../components/RepoList'

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
    request(`/users/${login}/repos`).then(repos => this.setState({ repos }))
    request(`/users/${login}`).then(user => this.setState({ user }))
  }

  render() {
    const { loading, user, repos } = this.state

    if (loading) {
      return null
    }

    return (
      <div>
        <div>
          <img src={user.avatar_url} alt={user.name} />
          <h1>{user.name}</h1>
          <p>{user.login}</p>
        </div>
        <RepoList repos={repos} />
      </div>
    )
  }
}

export default User
