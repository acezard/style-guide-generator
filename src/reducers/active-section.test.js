import reducer from './active-section'
import * as types from '../actions/types'

describe('Active window reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(0)
  })

  it('should handle section switch', () => {
    expect(
      reducer(undefined, {
        type: types.SECTION_SWITCH,
        section: 2
      })
    ).toEqual(2)

    expect(
      reducer(1, {
        type: types.SECTION_SWITCH,
        section: 3
      })
    ).toEqual(3)
  })
})
