import React from "react";

const styles = {
  video: {
    height: 200,
    width: '100%'
  },
};

const bugBunny = require('../../assets/big_buck_bunny.mp4');

export const VideoPlayer = () =>
  (<video
     ref={(ref) => {
       this.player = ref
     }}
     autoPlay
     style={styles.video}
  >
    <source src={bugBunny} type="video/mp4" />
  </video>);
