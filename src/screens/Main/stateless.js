import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import Slider from '../../components/Slider';

export default class Main extends React.Component {
  static propTypes = {
    fetchMovies: PropTypes.func,
    fetchSeries: PropTypes.func,
  };

  componentDidMount() {
    const { fetchMovies, fetchSeries } = this.props
    fetchMovies();
    fetchSeries();
  }

  render() {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Text>
          {'Main Screen'}
        </Text>
        <Slider />
      </View>
    );
  }
}
