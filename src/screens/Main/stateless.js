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
    openDetailsMovies: PropTypes.func,
    openDetailsSeries: PropTypes.func,
    movies: PropTypes.array,
    series: PropTypes.array,
    size: PropTypes.any
  };

  componentDidMount() {
    const { fetchConfiguration } = this.props
    fetchConfiguration();
  }

  render() {
    const { movies, series, openDetailsMovies, openDetailsSeries, size } = this.props;
    console.log('size', size)
    if(size) {
      console.log('movies', movies)
      console.log('series', series)
    }
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        { size &&
          <>
            <Slider data={movies} size={size} onPress={openDetailsMovies} />
            <Slider data={series} size={size} onPress={openDetailsSeries} />
          </>
        }
      </View>
    );
  }
}
