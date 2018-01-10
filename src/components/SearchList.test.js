import React from 'react'
import { shallow } from 'enzyme'
import SearchList from './SearchList'

it('does not show list', () => {
  const wrapper = shallow(<SearchList users={[]} />)

  expect(true).toBe(false)
})

it('displays list', () => {
  const wrapper = shallow(<SearchList users={[]} />)

  expect(true).toBe(false)
})

it('displays user avatar and login name', () => {
  const wrapper = shallow(<SearchList users={[]} />)

  expect(true).toBe(false)
})

it('displays empty message list', () => {
  const wrapper = shallow(<SearchList users={[]} />)

  expect(true).toBe(false)
})
