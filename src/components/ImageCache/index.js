import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FastImage from 'react-native-fast-image';

import styles from './styles';

export default class ImageCache extends Component {
  static propTypes = {
    source: PropTypes.object.isRequired,
    customStyle: PropTypes.object,
  };

  render () {
    const { source: { uri }, customStyles } = this.props;

    return (
      <FastImage
        style={customStyles}
        source={{
          uri,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
    );
  }
}
