import React from 'react';

import * as Carousel from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import ImageCache from "../ImageCache/index.web";

export default class Slider extends React.Component{
  render() {
    return (
      <Carousel.CarouselProvider
        visibleSlides={1}
        totalSlides={6}
        naturalSlideWidth={200}
        naturalSlideHeight={200}
      >
        <Carousel.Slider style={{ maxWidth: 200 }}>
          <Carousel.Slide style={{ width: 200, height: 200 }} index={0}>
            <ImageCache
              customStyle={{ width: '100%', height: 200 }}
              source={{ uri: "https://unsplash.it/400/400?image=1" }}
            />
          </Carousel.Slide>
          <Carousel.Slide style={{ width: 200, height: 200 }} index={1}>
            <ImageCache
              customStyle={{ width: '100%', height: 200 }}
              source={{ uri: "https://unsplash.it/400/400?image=1" }}
            />
          </Carousel.Slide>
          <Carousel.Slide style={{ width: 200, height: 200 }} index={2}>
            <ImageCache
              customStyle={{ width: '100%', height: 200 }}
              source={{ uri: "https://unsplash.it/400/400?image=1" }}
            />
          </Carousel.Slide>
          <Carousel.Slide style={{ width: 200, height: 200 }} index={0}>
            <ImageCache
              customStyle={{ width: '100%', height: 200 }}
              source={{ uri: "https://unsplash.it/400/400?image=1" }}
            />
          </Carousel.Slide>
          <Carousel.Slide style={{ width: 200, height: 200 }} index={1}>
            <ImageCache
              customStyle={{ width: '100%', height: 200 }}
              source={{ uri: "https://unsplash.it/400/400?image=1" }}
            />
          </Carousel.Slide>
          <Carousel.Slide style={{ width: 200, height: 200 }} index={2}>
            <ImageCache
              customStyle={{ width: '100%', height: 200 }}
              source={{ uri: "https://unsplash.it/400/400?image=1" }}
            />
          </Carousel.Slide>
        </Carousel.Slider>
      </Carousel.CarouselProvider>
    )
  }
}
