import * as actions from './actions'
import * as types from './types'

describe('actions', () => {
  it('should change the current active section', () => {
    const section = 2

    const expectedAction = {
      type: types.SECTION_SWITCH,
      section
    }

    expect(actions.sectionSwitch(section)).toEqual(expectedAction)
  })
})
