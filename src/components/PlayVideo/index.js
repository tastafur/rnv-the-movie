import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';

import PlayButton from '../../assets/play-button.png'

import styles from './styles';

import ImageCache from '../../components/ImageCache';


export default class Detail extends React.Component {
  static propTypes = {
    onPress: PropTypes.func,
  };

  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.button}
        onPress={this.props.onPress}
      >
        <ImageCache
          customStyles={styles.image}
          imageApi={false}
          otherUrl={PlayButton}
        />
      </TouchableOpacity>
    );
  }
}
