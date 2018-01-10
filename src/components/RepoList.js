import React from 'react'
import './RepoList.css'

const RepoList = ({ repos = [] }) =>
  repos.length === 0 ? (
    <div className="list-empty">No repos</div>
  ) : (
    repos.map(({id, name, description, html_url})=> (
      <a key={id} className="repo-item" href={html_url}>
        <h3>{name}</h3>
        <p>{description}</p>
      </a>
    ))
  )

export default RepoList
