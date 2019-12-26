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
  };

  render () {
    const { source: { path }, customStyles, baseUrl, size } = this.props;

    return (
      <Img
        style={customStyles}
        src={`${baseUrl}${size}${path}?api_key=${config.token}`}
      />
    );
  }
}
