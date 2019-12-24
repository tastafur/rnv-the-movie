import React from "react";

// Within your render function, assuming you have a file called
// "background.mp4" in your project. You can include multiple videos
// on a single screen if you like.
const styles = {
  video: {
    height: 200,
    width: '100%'
  },
};

export default () =>
  (<video
     ref={(ref) => {
       this.player = ref
     }}
     style={styles.video}
  >
    <source src="file://big_buck_bunny.mp4" type="video/mp4" />
  </video>);
