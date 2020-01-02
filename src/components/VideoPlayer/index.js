import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayerNative from 'react-native-video-controls';

const bugBunny = require('../../assets/big_buck_bunny.mp4');

const VideoPlayer = ({ navigation }) =>
    <VideoPlayerNative source={bugBunny} navigator={navigation} />


VideoPlayer.propTypes = {
  navigation: PropTypes.object
}

export default VideoPlayer;
