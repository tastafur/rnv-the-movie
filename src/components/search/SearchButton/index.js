import React from 'react';
import PropTypes from 'prop-types';

import { BorderlessButton } from 'react-native-gesture-handler';

import ImageCache from '../../ImageCache/index';

import Search from '../../../assets/search.png';

import styles from './styles';

const SearchButton = ({ navigation }) => {
  console.log('render button')
  return (<BorderlessButton
    onPress={() => {
      console.log('Press head')
      navigation.navigate('Search')
    }}
    style={styles.button}>
    <ImageCache
      customStyles={styles.image}
      imageApi={false}
      otherUrl={Search}
    />
  </BorderlessButton>);
}


SearchButton.propTypes = {
  navigation: PropTypes.object
}

export default SearchButton;
