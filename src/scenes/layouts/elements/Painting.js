import React from 'react'
import { View, Video, asset, Text } from 'react-vr'

export default class Painting extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      paitingShown: false
    }
  }

  showPainting = (event) => {
    this.setState({ paitingShown: true })
  }

  hidePainting = (event) => {
    this.setState({ paitingShown: false })
  }

  render () {
    return (
      <View style={{ flex: 1, borderWidth: 0.03 }} onEnter={this.showPainting} onExit={this.hidePainting}>
        <Video
          autoplay={true}
          loop={true}
          source={asset(`${this.props.info.file}`)}
          style={{ flex: 1 }}
        >
        { this.state.paitingShown ?
          (
            <View style={{ transform: [{ translate: [-0.1, 0.2, 0.4] }, { rotateX: 30 }], height: 1, width: 1 }}>
              <View>
                <Text>{this.props.info.title}</Text>
              </View>
              <View>
                <Text>{this.props.info.year}</Text>
              </View>
            </View>
          ) : null
        }
        </Video>
      </View>
    )
  }
}

