import React from 'react'
import './SearchInput.css'

const SearchInput = ({ value, onChange }) => {
  return (
    <div className="list-search-filter">
      <input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}

export default SearchInput
