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

export class Sidebar extends Component {
  getList () {
    return sections.map((section, index) =>
      <li key={section} className={`bold ${this.props.activeSection === index && 'active'}`}>
        <a onClick={() => this.props.sectionSwitch(index)} href="#" data-section={index} className="waves-effect waves-teal">
          {section}
        </a>
      </li>
    )
  }

  render () {
    return <header className="side-nav fixed">
      <div className="logo">
        <a href="#" data-section="0" className="brand-logo">
          <img src={logo} alt="Ecedi" />
        </a>
      </div>

      <ul className="side-nav-links">
        {this.getList()}
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
