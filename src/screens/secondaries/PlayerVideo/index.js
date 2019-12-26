import React from 'react';
import { View, Text } from 'react-native';
import { VideoPlayer } from '../../../components/VideoPlayer';

export default class PlayerVideo extends React.Component {
  render() {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Text>
          {'Player video'}
        </Text>
        <VideoPlayer />
      </View>
    );
  }
}
