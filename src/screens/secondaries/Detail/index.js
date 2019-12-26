import React from 'react';
import { View, Text } from 'react-native';

export default class Detail extends React.Component {
  render() {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Text>
          {'Detail screen'}
        </Text>
      </View>
    );
  }
}
