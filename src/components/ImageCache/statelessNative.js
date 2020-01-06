import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FastImage from 'react-native-fast-image';

import config from '../../../config.json';

export default class ImageCache extends Component {
  static propTypes = {
    source: PropTypes.object,
    customStyles: PropTypes.object,
    baseUrl: PropTypes.string,
    size: PropTypes.any,
    otherUrl: PropTypes.number,
    imageApi: PropTypes.bool
  };

  render () {
    const { source, customStyles, baseUrl, size, imageApi = true, otherUrl } = this.props;
    const uri = imageApi ? `${baseUrl}${size}${source.path}` : otherUrl;
    const sourceInternal = imageApi ? {
      uri,
      headers: { Authorization: `Bearer ${config.token}` },
      priority: FastImage.priority.high
    } : otherUrl;
    return (
      <FastImage
        style={customStyles}
        source={sourceInternal}
        resizeMode={FastImage.resizeMode.cover}
      />
    );
  }
}
