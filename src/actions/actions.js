import * as types from './types'

export const sectionSwitch = section => {
  return {
    type: types.SECTION_SWITCH,
    section
  }
}
