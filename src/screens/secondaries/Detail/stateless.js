import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import styles from './styles';

import ImageCache from '../../../components/ImageCache';
import PlayVideo from '../../../components/PlayVideo';

// Selectors
import { getEntertainmentContent, getFieldsMainEntertainment } from '../../../selectors/commons';


export default class Detail extends React.Component {
  static navigationOptions = {
    title: 'Detail',
  };

  static propTypes = {
    navigation: PropTypes.object,
    size: PropTypes.string,
    entertainmentContent: PropTypes.object,
    movies: PropTypes.object,
    series: PropTypes.object,
    openVideo: PropTypes.func
  };

  render() {
    const { navigation: { state: { params: { id } } }, size, movies, series, openVideo } = this.props;
    const { path, title, subtitle } = getFieldsMainEntertainment(getEntertainmentContent({ movies, series }, id));

    return (
      <View style={styles.container}>
        <ImageCache
          customStyles={styles.background}
          size={size}
          source={{ path }}
        />
        <View style={styles.card}>
          <PlayVideo onPress={openVideo} />
          <Text style={styles.title}>{title || ''}</Text>
          <Text style={styles.subtitle} numberOfLines={4} ellipsizeMode={'tail'}>{subtitle || ''}</Text>
        </View>
      </View>
    );
  }
}
