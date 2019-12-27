import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import Slider from '../../components/Slider';

export default class Main extends React.Component {
  static navigationOptions = {
    title: 'Discover',
  };

  static propTypes = {
    fetchConfiguration: PropTypes.func,
    openDetailsEntertainment: PropTypes.func,
    movies: PropTypes.array,
    series: PropTypes.array,
    size: PropTypes.any
  };

  componentDidMount() {
    const { fetchConfiguration } = this.props
    fetchConfiguration();
  }

  render() {
    const { movies, series, openDetailsEntertainment, size } = this.props;

    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        { size &&
          <>
            <Slider data={movies} size={size} onPress={openDetailsEntertainment} />
            <Slider data={series} size={size} onPress={openDetailsEntertainment} />
          </>
        }
      </View>
    );
  }
}
