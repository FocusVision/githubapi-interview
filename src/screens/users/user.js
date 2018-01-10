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
        This is where you will write stuff for {this.props.match.params.login}'s
        profle
        {
          repos.map(({name, description, html_url}) =>
            <div onClick={() => window.location.replace(html_url)}>
              <h3>{name}</h3>
              <p>{description}</p>
            </div>
          )
        }
      </div>
    )
  }
}

export default User
