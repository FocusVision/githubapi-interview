import React from 'react'
import { Link } from 'react-router-dom'
import './RepoList.css'

const RepoList = ({ repos = [] }) =>
  repos.length === 0 ? (
    <div className="list-empty">No repos</div>
  ) : (
    repos.map(({id, name, description, html_url})=> (
      <Link key={id} className="repo-item" to={html_url}>
        <h3>{name}</h3>
        <p>{description}</p>
      </Link>
    ))
  )

export default RepoList
