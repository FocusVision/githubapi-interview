import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import request from '../utils/request'
import './User.css'

const User = () => {
  const { login } = useParams()
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])

  useEffect(() => {
    setLoading(true)
    return Promise.all([
      request(`/users/${login}`),
      request(`/users/${login}/repos`),
    ]).then(([user, repos]) => {
      setUser(user)
      setRepos(repos)
      setLoading(false)
    })
  }, [login])

  return loading ? null : (
    <>
      <div className="user-details">
        <img alt="user avatar" src={user.avatar_url} className="user-avatar" />
        <div className="user-details-meta">
          <h3>{user.login}</h3>
          <p>{user.name}</p>
        </div>
      </div>
      <h3>Repos</h3>
      <div className="list list-repo">
        {repos.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className="list-item"
          >
            <strong>{repo.name}</strong>
            {repo.description}
          </a>
        ))}
      </div>
    </>
  )
}

export default User
