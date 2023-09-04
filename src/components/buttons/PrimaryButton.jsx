import React, { Component } from 'react'

export class PrimaryButton extends Component {
  render() {
    const {children} = this.props
    return (
      <button>{children}</button>
    )
  }
}

export default PrimaryButton