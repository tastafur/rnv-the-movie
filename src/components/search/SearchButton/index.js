import React from 'react';
import PropTypes from 'prop-types';

import { TouchableOpacity } from 'react-native';

import ImageCache from '../../ImageCache';

import Search from '../../../assets/search.png';

import styles from './styles';

const SearchButton = ({ navigation }) =>
  <TouchableOpacity
    activeOpacity={1}
    onPress={() => navigation.navigate('Search')}
    style={styles.button}>
    <ImageCache
      customStyles={styles.image}
      imageApi={false}
      otherUrl={Search}
    />
  </TouchableOpacity>;


SearchButton.propTypes = {
  navigation: PropTypes.object
}

export default SearchButton;
