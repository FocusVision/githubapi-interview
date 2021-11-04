import React, { useState, useEffect, useMemo } from 'react'
import { Route, useLocation, useHistory, useRouteMatch } from 'react-router-dom'
import debounce from 'lodash.debounce'
import SearchInput from './SearchInput'
import UsersList from './UsersList'
import User from './User'
import request from '../utils/request'
import './Users.css'

const Users = () => {
  const history = useHistory()
  const { path } = useRouteMatch()
  const { search } = useLocation()
  const q = new URLSearchParams(search).get('qq') || ''
  const [users, setUsers] = useState([])

  const updateUsersFromQuery = useMemo(
    () =>
      debounce(
        (q) =>
          request(`/search/users?q=${q}`).then(({ items }) => setUsers(items)),
        300
      ),
    []
  )

  useEffect(() => {
    if (q) {
      updateUsersFromQuery(q)
    } else {
      setUsers([])
    }
  }, [q, updateUsersFromQuery, setUsers])

  return (
    <main>
      <div className="search">
        <div className="list-header">
          <SearchInput
            value={q}
            onChange={(query) => {
              history.push({ search: query ? `q=${query}` : '' })
            }}
          />
        </div>
        <div className="list">{q && <UsersList users={users} />}</div>
      </div>

      <div className="content">
        <Route path={`${path}/:login`}>
          <User />
        </Route>
      </div>
    </main>
  )
}

export default Users
