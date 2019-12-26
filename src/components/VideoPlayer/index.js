import Video from 'react-native-video';
import { StyleSheet } from 'react-native';
import React from "react";

const styles = StyleSheet.create({
  video: {
    height: 200,
    width: '100%'
  },
});

const bugBunny = require('./big_buck_bunny.mp4');

export const VideoPlayer = () =>
    <Video source={bugBunny}   // Can be a URL or a local file.
       ref={(ref) => {
         this.player = ref
       }}
       style={styles.video}
    />


