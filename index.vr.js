import React from 'react'
import { AppRegistry } from 'react-vr'
import Room from './src/scenes/Room'

export default class VanGogh extends React.Component {
  render() {
    return (
      <Room />
    )
  }
}

AppRegistry.registerComponent('VanGogh', () => VanGogh)
