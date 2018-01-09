import React from 'react'
import SearchFilter from '../components/SearchFilter'
import SearchList from '../components/SearchList'
import { Route } from 'react-router-dom'
import './users.css'

import User from './users/user'

const Users = ({ match: { path } }) => (
  <main>
    <div className="search">
      <div className="list-header">
        <SearchFilter />
      </div>
      <div className="list">
        <SearchList users={[]} />
      </div>
    </div>

    <div className="content">
      <Route path={`${path}/:userId`} component={User} />
    </div>
  </main>
)

export default Users
