import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayerNative from 'react-native-video-controls';

const VideoPlayer = ({ navigation }) =>
    <VideoPlayerNative source={require('../../assets/big_buck_bunny.mp4')} navigator={navigation} />


VideoPlayer.propTypes = {
  navigation: PropTypes.object
}

export default VideoPlayer;
