import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FastImage from 'react-native-fast-image';

import config from '../../../config.json';

export default class ImageCache extends Component {
  static propTypes = {
    source: PropTypes.object.isRequired,
    customStyles: PropTypes.object,
    baseUrl: PropTypes.string,
    size: PropTypes.any,
  };

  render () {
    const { source: { path }, customStyles, baseUrl, size } = this.props;

    return (
      <FastImage
        style={customStyles}
        source={{
          uri: `${baseUrl}${size}${path}`,
          headers: { Authorization: `Bearer ${config.token}` },
          priority: FastImage.priority.high
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
    );
  }
}
