import React, { Component } from 'react'
import './Sidebar.css'
import logo from './logo-ecedi.png'
import { connect } from 'react-redux'
import * as actions from '../../actions/actions'

const sections = [
  'Couleurs',
  'Typographies',
  'Dimensions'
]

const sectionList = sections.map((section, index) =>
  <li key={section} className="bold"><a href="#" data-section={index} className="waves-effect waves-teal">{section}</a></li>
)

export class Sidebar extends Component {
  render () {
    return <header className="side-nav fixed">
      <div className="logo">
        <a href="#" data-section="0" className="brand-logo">
          <img src={logo} alt="Ecedi" />
        </a>
      </div>

      {this.props.activeSection}

      <ul className="side-nav-links">
        {sectionList}
      </ul>
    </header>
  }
}

function mapStateToProps (state) {
  return {
    activeSection: state.activeSection
  }
}

export default connect(mapStateToProps, actions)(Sidebar)
