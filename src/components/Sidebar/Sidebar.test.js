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

    expect(enzymeWrapper.find('ul').hasClass('side-nav-links')).toBe(true)

    expect(enzymeWrapper.find('a').first().prop('data-section')).toBe('0')
  })

  it('should indicate the current section', () => {
    const { enzymeWrapper } = setup()
    enzymeWrapper.setProps({activeSection: 0})
    expect(enzymeWrapper.find('li').first().hasClass('active')).toBe(true)
  })
})
