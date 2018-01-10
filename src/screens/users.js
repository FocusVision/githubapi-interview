import React, { Component } from 'react'
import SearchFilter from '../components/SearchFilter'
import SearchList from '../components/SearchList'
import { Route } from 'react-router-dom'
import request from '../utils/api'
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
      return this.setState({ users: [] })
    }

    request(`/search/users?q=${query}`).then(({ items }) =>
      this.setState({ users: items })
    )
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
              onChange={query =>
                history.push({ search: query ? `q=${query}` : '' })
              }
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
