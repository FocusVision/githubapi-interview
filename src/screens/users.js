import React, { Component } from 'react'
import SearchFilter from '../components/SearchFilter'
import SearchList from '../components/SearchList'
import { Route } from 'react-router-dom'
import './users.css'

import User from './users/user'

class Users extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    this.fetchUsers()
  }

  componentDidUpdate(prevProps) {
    const { query } = this.props

    if (query !== prevProps.query) {
      this.fetchUsers()
    }
  }

  fetchUsers = () => {
    const query = this.props.query.get('q')

    if (!query) {
      return
    }

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
    const { match: { path }, query, history } = this.props
    const { users } = this.state

    return (
      <main>
        <div className="search">
          <div className="list-header">
            <SearchFilter
              initialValue={query.get('q')}
              onChange={query => history.push({ search: `q=${query}` })}
            />
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
