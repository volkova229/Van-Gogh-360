import React from 'react'
import { View, VrButton, asset } from 'react-vr'
import Painting from './elements/Painting'
import { PAINTINGS } from '../../../constants'

export default class Wall extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <View style={{ flex: 1 }}>
        <VrButton onClick={this.props.onSceneChange}>
          <View style={{ transform: [{ translate: [0.45, 0.61, -2] }, { rotate: 1}], height: 0.4, width: 0.61 }}>
            <Painting info={PAINTINGS[0]}/>
          </View>
        </VrButton>
        <View style={{ transform: [{ translate: [-1.22, 1.04, -2] }, { rotate: -2}], height: 0.48, width: 0.39 }}>
          <Painting info={PAINTINGS[1]}/>
        </View>
        <View style={{ transform: [{ translate: [1.9, 2.03, -2] }, { rotateY: 90 }, { rotateX: -9}, { rotate: 0.3 } ], height: 0.53, width: 0.42 }}>
          <Painting info={PAINTINGS[2]}/>
        </View>
        <View style={{ transform: [{ translate: [4.15, 4.13, -2] }, { rotateY: 90 }, { rotateX: -10}, { rotateY: -3 }, { rotate: -3 } ], height: 1.2, width: 1 }}>
          <Painting info={PAINTINGS[3]}/>
        </View>
        <View style={{ transform: [{ translate: [-1.23, 2.83, 2] }, { rotateY: -30 }, { rotateX: 30 }, { rotate: 1} ], height: 0.64, width: 0.83 }}>
          <Painting info={PAINTINGS[4]}/>
        </View>
      </View>
    )
  }
}
