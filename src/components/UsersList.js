import React from 'react'
import { Link } from 'react-router-dom'
import './UsersList.css'

const UsersList = ({ users = [] }) =>
  users.length === 0 ? (
    <div className="list-empty">Nope</div>
  ) : (
    users.map((user) => (
      <Link key={user.id} className="list-item" to={`/users/${user.login}`}>
        <img className="list-avatar" src={user.avatar_url} alt="user avatar" />
        {user.login}
      </Link>
    ))
  )

export default UsersList
