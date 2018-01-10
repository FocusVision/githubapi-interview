import React, { Component } from 'react'
import request from '../../utils/api'
import RepoList from '../../components/RepoList'
import './user.css'

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
          <img className='user-avatar' src={user.avatar_url} alt={user.name} />
          <div className='user-info'>
            <h1>{user.name}</h1>
            <p>{user.login}</p>
          </div>
        </div>
        <h2>Repositories</h2>
        <RepoList repos={repos} />
      </div>
    )
  }
}

export default User
