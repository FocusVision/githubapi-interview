import React, { Component } from 'react'
import SearchFilter from '../components/SearchFilter'
import SearchList from '../components/SearchList'
import { Route } from 'react-router-dom'
import './users.css'

import User from './users/user'

class Users extends Component {
  state = {
    query: 'FocusVision',
    users: []
  }

  componentDidMount() {
    const { query } = this.state

    fetch(`https://api.github.com/search/users?q=${query}`, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
        Authorization: `Basic ${btoa(
          `${process.env.REACT_APP_GITHUB_USERNAME}:${
            process.env.REACT_APP_GITHUB_TOKEN
          }`
        )}`
      }
    })
      .then(response => response.json())
      .then(({ items }) => this.setState({ users: items }))
  }

  render() {
    const { match: { path } } = this.props
    const { users, query } = this.state

    return (
      <main>
        <div className="search">
          <div className="list-header">
            <SearchFilter query={query} />
          </div>
          <div className="list">
            <SearchList users={users} />
          </div>
        </div>

        <div className="content">
          <Route path={`${path}/:userId`} component={User} />
        </div>
      </main>
    )
  }
}

export default Users
