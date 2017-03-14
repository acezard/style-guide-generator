import React, { Component } from 'react'
import Sidebar from './components/Sidebar'
import Section from './components/Section'
import './App.css'

class App extends Component {
  render () {
    return (
      <div>
        <Sidebar />
        <Section />
      </div>
    )
  }
}

export default App
