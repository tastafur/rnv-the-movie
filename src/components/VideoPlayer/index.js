import Video from 'react-native-video';
import { StyleSheet } from 'react-native';
import React from "react";

// Within your render function, assuming you have a file called
// "background.mp4" in your project. You can include multiple videos
// on a single screen if you like.
const styles = StyleSheet.create({
  video: {
    height: 200,
    width: '100%'
  },
});

const bugBunny = require('./big_buck_bunny.mp4');

export default () =>
    <Video source={bugBunny}   // Can be a URL or a local file.
       ref={(ref) => {
         this.player = ref
       }}
       style={styles.video}
    />


