import React from 'react';
import Carousel from 'react-native-snap-carousel';
import PropTypes from 'prop-types';

import Card from '../Card';
import { itemWidth, sliderWidth } from '../Card/styles';
import styles from './styles';

export default class Slider extends React.Component {
  static propTypes = {
    onPress: PropTypes.func,
    data: PropTypes.array,
    size: PropTypes.any
  }
  renderItem = ({item, index}) =>
    <Card size={this.props.size} onPress={this.props.onPress} data={item} even={(index + 1) % 2 === 0} />;


  render() {
    return(
      <Carousel
        data={this.props.data}
        renderItem={this.renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        inactiveSlideScale={0.95}
        inactiveSlideOpacity={1}
        enableMomentum={true}
        activeSlideAlignment={'start'}
        containerCustomStyle={styles.nativeContainer}
        contentContainerCustomStyle={styles.nativeContentContainer}
        activeAnimationType={'spring'}
        activeAnimationOptions={{
          friction: 4,
          tension: 40
        }}
      />
    )
  }
}
