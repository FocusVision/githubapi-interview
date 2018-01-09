import React from 'react'
import SearchFilter from '../components/SearchFilter'
import SearchList from '../components/SearchList'
import './users.css'

const Users = () => (
  <main>
    <div className="search">
      <div className="list-header">
        <SearchFilter />
      </div>
      <div className="list">
        <SearchList users={[]} />
      </div>
    </div>

    <div className="content" />
  </main>
)

export default Users
