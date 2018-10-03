import React from 'react'
import { View, Pano, asset, VideoPano } from 'react-vr'
import Wall from './layouts/Wall'

export default class Room extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      scene: 'room'
    }
  }

  enterStarryNight = () => {
    this.setState({
      scene: 'starry-night'
    })
  }

  render () {
    return this.state.scene == 'room' ?  (
      <View style={{ width: 4, height: 4 }}>
        <Pano source={asset('van-gogh.jpg')} />
        <Wall onSceneChange={this.enterStarryNight} />
      </View>
    ) : (
      <View style={{ width: 4, height: 4 }}>
        <VideoPano source={asset('starry_night_360.mp4', { format: 'mp4' })}/>
      </View>
    )
  }
}
