import React, { Component } from 'react'
import debounce from 'lodash/debounce'
import './SearchFilter.css'

class SearchFilter extends Component {
  state = {
    value: this.props.initialValue || ''
  }

  handleChange = e => {
    this.setState({ value: e.target.value }, this.notifyChange)
  }

  notifyChange = debounce(() => {
    this.props.onChange(this.state.value)
  }, 250)

  render() {
    const { value } = this.state

    return (
      <div className="list-search-filter">
        <input
          type="text"
          placeholder="Search..."
          value={value}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default SearchFilter
