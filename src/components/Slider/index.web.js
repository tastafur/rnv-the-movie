import React from 'react';

import { CarouselProvider, Slide, Slider as SliderPure } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import ImageCache from "../ImageCache/index.web";
import PropTypes from "prop-types";

export default class Slider extends React.Component {
  static propTypes = {
    onPress: PropTypes.func,
    data: PropTypes.array,
    size: PropTypes.any
  }

  renderItem = ({ path, onPress, size, i, id }) => {
    return (
      <Slide
        style={{ width: Number(size.split('w')[1]), height: 'auto' }}
        key={i}
        index={i}
        onClick={() => onPress(id)}
      >
        <ImageCache
          customStyles={{ width: Number(size.split('w')[1]), height: 'auto' }}
          size={size}
          source={{ path }}
        />
      </Slide>
    );
  }

  render() {
    const { data, onPress, size } = this.props;
    return (
      <CarouselProvider
        visibleSlides={1}
        totalSlides={data.length}
        naturalSlideWidth={Number(size.split('w')[1])}
        naturalSlideHeight={250}
      >
        <SliderPure style={{ maxWidth: Number(size.split('w')[1]), maxHeight: 250 }}>
          { data.length > 0 && data.map(({path}, i) =>
            this.renderItem({ path, onPress, size, i })
          )}
        </SliderPure>
      </CarouselProvider>
    )
  }
}
