import React from 'react'
import './SearchFilter.css'

const SearchFilter = ({ query, onChange }) => (
  <div className="list-search-filter">
    <input
      type="text"
      placeholder="Search..."
      value={query}
      onChange={onChange}
    />
  </div>
)

export default SearchFilter
