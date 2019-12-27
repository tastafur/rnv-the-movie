import React from 'react';
import VideoPlayerNative from 'react-native-video-controls';
import PropTypes from "prop-types";

const bugBunny = require('../../assets/big_buck_bunny.mp4');

const VideoPlayer = ({ navigation }) =>
    <VideoPlayerNative source={bugBunny} navigator={navigation} />


VideoPlayer.propTypes = {
  navigation: PropTypes.object
}

export default VideoPlayer;
