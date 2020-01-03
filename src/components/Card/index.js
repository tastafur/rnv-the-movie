import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import ImageCache from '../ImageCache';
import styles from './styles';

export default class Card extends Component {

  static propTypes = {
    data: PropTypes.object.isRequired,
    even: PropTypes.bool,
    size: PropTypes.any,
    onPress: PropTypes.func
  };

  get image () {
    const { data: { path }, size } = this.props;

    return <ImageCache
      size={size}
      customStyles={styles.image}
      source={{
        path,
      }}
    />;
  }

  render () {
    const { data: { title, subtitle, id }, even, onPress } = this.props;

    const uppercaseTitle = title ? (
      <Text
        style={[styles.title, even ? styles.titleEven : {}]}
        numberOfLines={2}
      >
        { title.toUpperCase() }
      </Text>
    ) : false;

    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.slideInnerContainer}
        onPress={() => onPress(id)}
      >
        <View style={styles.shadow} />
        <View style={[styles.imageContainer, even ? styles.imageContainerEven : {}]}>
          { this.image }
          <View style={[styles.radiusMask, even ? styles.radiusMaskEven : {}]} />
        </View>
        <View style={[styles.textContainer, even ? styles.textContainerEven : {}]}>
          { uppercaseTitle }
          <Text
            style={[styles.subtitle, even ? styles.subtitleEven : {}]}
            numberOfLines={2}
          >
            { subtitle }
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
