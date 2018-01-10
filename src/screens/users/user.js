import React, { Component, Fragment } from 'react'
import request from '../../utils/api'
import './user.css'

class User extends Component {
  state = {
    loading: true,
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
        <div className="user-details">
          <img
            alt="user avatar"
            src={user.avatar_url}
            className="user-avatar"
          />
          <div className="user-details-meta">
            <h3>{user.login}</h3>
            <p>{user.name}</p>
          </div>
        </div>
        <h3>Repos</h3>
        <div className="list list-repo">
          {repos.map(repo => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              className="list-item"
            >
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
