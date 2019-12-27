import React from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import VideoPlayer from '../../../components/VideoPlayer';

const PlayerVideo = ({navigation}) => (
  <VideoPlayer navigation={navigation} />
);

PlayerVideo.propTypes = {
  navigation: PropTypes.object
}

export default withNavigation(PlayerVideo)
