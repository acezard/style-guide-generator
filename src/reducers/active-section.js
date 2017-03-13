const activeSection = (state = 0, { type, section: activeSection }) => {
  switch (type) {
    case 'SECTION_SWITCH':
      return activeSection
    default:
      return state
  }
}

export default activeSection
