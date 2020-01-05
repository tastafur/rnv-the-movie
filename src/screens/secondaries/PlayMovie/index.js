import React from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import VideoPlayer from '../../../components/VideoPlayer';

const PlayMovie = ({navigation}) => (
  <VideoPlayer navigation={navigation} />
);

PlayMovie.propTypes = {
  navigation: PropTypes.object
}

export default withNavigation(PlayMovie)
