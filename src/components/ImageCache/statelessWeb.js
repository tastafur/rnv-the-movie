import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Img from 'react-image';

import config from '../../../config.json';

export default class ImageCache extends Component {
  static propTypes = {
    source: PropTypes.object.isRequired,
    customStyles: PropTypes.object,
    baseUrl: PropTypes.string,
    size: PropTypes.any,
    otherUrl: PropTypes.string,
    imageApi: PropTypes.bool
  };

  render () {
    const { source, customStyles, baseUrl, size, imageApi = true, otherUrl } = this.props;
    const uri = imageApi ? `${baseUrl}${size}${source.path}?api_key=${config.token}` : otherUrl;

    return (
      <Img
        style={customStyles}
        src={(imageApi ? uri : otherUrl)}
      />
    );
  }
}
