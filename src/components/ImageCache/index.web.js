import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Img from 'react-image';

export default class ImageCache extends Component {
  static propTypes = {
    source: PropTypes.object.isRequired,
    customStyles: PropTypes.object,
  };

  render () {
    const { source: { uri }, customStyles } = this.props;

    return (
      <Img
        style={customStyles}
        src={uri}
      />
    );
  }
}
