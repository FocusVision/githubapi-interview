import React from 'react'
import { shallow, mount } from 'enzyme'
import SearchList from './SearchList'
import { MemoryRouter } from 'react-router-dom'

it('does not show list', () => {
  const wrapper = shallow(<SearchList users={[]} />)

  expect(true).toBe(false)
})

it('displays list', () => {
  const wrapper = shallow(<SearchList users={[]} />)

  expect(true).toBe(false)
})

it('displays user avatar and login name', () => {
  const wrapper = mount(
    <MemoryRouter>
      <SearchList users={ users } />
    </MemoryRouter>
  )

  expect(true).toBe(false)
})

it('displays empty message list', () => {
  const wrapper = shallow(<SearchList users={[]} />)

  expect(true).toBe(false)
})
