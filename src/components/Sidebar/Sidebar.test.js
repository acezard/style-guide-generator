import React from 'react'
import { shallow } from 'enzyme'
import { Sidebar } from './Sidebar'

function setup () {
  const props = {
    sectionSwitch: jest.fn()
  }

  const enzymeWrapper = shallow(<Sidebar {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('sidebar', () => {
  it('should render self and subcomponents', () => {
    const { enzymeWrapper } = setup()

    expect(enzymeWrapper.contains('header')).toBeDefined()

    expect(enzymeWrapper.find('ul').hasClass('side-nav')).toBe(true)

    expect(enzymeWrapper.find('a').first().prop('data-section')).toBe('0')
  })
})
