import React from 'react'
import { Link } from 'react-router-dom'
import './SearchList.css'

const SearchList = ({ users = [] }) =>
  users.length === 0 ? (
    <div className="list-empty">Nope</div>
  ) : (
    users.map(user => (
      <Link to={`/users/${user.login}`}>
        <img className="list-avatar" src={user.avatarUrl} alt="user avatar" />
        {user.login}
      </Link>
    ))
  )

export default SearchList
