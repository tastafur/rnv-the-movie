import React from 'react';
import styles from './styles';

export const VideoPlayer = () =>
  (<video
     ref={(ref) => {
       this.player = ref
     }}
     autoPlay
     style={styles.video}
  >
    <source src={require('../../assets/big_buck_bunny.mp4')} type="video/mp4" />
  </video>);
