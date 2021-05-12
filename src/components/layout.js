import React from 'react'
import './base.css'
import Container from './container'
import Navigation from './navigation'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <Container>
        <Navigation />
        {children}
        2021
      </Container>
    )
  }
}

export default Template
