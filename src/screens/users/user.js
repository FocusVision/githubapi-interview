import React, { Component, Fragment } from 'react'
import request from '../../utils/api'

class User extends Component {
  state = {
    loading: true,
    user: {},
    repos: []
  }

  componentDidMount() {
    const { match: { params: { login } } } = this.props

    Promise.all([
      request(`/users/${login}`),
      request(`/users/${login}/repos`)
    ]).then(([user, repos]) =>
      this.setState({
        user,
        repos,
        loading: false
      })
    )
  }

  render() {
    const { loading, user, repos } = this.state

    if (loading) {
      return null
    }

    return (
      <Fragment>
        <div class="user-details">
          <img src={user.avatar_url} class="user-avatar" />
          <div className="user-details-meta">
            <h3>{user.login}</h3>
            <p>{user.name}</p>
          </div>
        </div>
        <h3>Repos</h3>
        <div class="list list-repo">
          {repos.map(repo => (
            <a href={repo.html_url} target="_blank" class="list-item">
              <strong>{repo.name}</strong>
              {repo.description}
            </a>
          ))}
        </div>
      </Fragment>
    )
  }
}

export default User
