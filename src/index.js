import React from 'react';
import { View, Text } from 'react-native';
import { Api } from 'renative';
import Carousel from 'react-native-snap-carousel';

import SliderEntry from './components/SliderEntry'
import VideoPlayer from './components/VideoPlayer'

import { sliderWidth, itemWidth } from './components/SliderEntry/styles';
import styles from './styles';

const ENTRIES2 = [
  {
    title: 'Favourites landscapes 1',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://unsplash.it/400/400?image=1'
  },
  {
    title: 'Favourites landscapes 2',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://unsplash.it/400/400?image=1'
  },
  {
    title: 'Favourites landscapes 3',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat',
    illustration: 'https://unsplash.it/400/400?image=1'
  },
  {
    title: 'Favourites landscapes 4',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://unsplash.it/400/400?image=1'
  },
  {
    title: 'Favourites landscapes 5',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://unsplash.it/400/400?image=1'
  },
  {
    title: 'Favourites landscapes 6',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat',
    illustration: 'https://unsplash.it/400/400?image=1'
  }
];

class Index extends React.Component {
    _renderItem ({item, index}) {
      return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
    }
    render() {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <Text>
                    {'This is blank app'}
                </Text>
                <Text>
                    {`platform: ${Api.platform}`}
                </Text>
                <Text>
                    {`factor: ${Api.formFactor}`}
                </Text>

              { Api.platform !== "web" &&
              <Carousel
                data={ENTRIES2}
                renderItem={this._renderItem}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                inactiveSlideScale={0.95}
                inactiveSlideOpacity={1}
                enableMomentum={true}
                activeSlideAlignment={'start'}
                containerCustomStyle={styles.slider}
                contentContainerCustomStyle={styles.sliderContentContainer}
                activeAnimationType={'spring'}
                activeAnimationOptions={{
                  friction: 4,
                  tension: 40
                }}
              />

              }

              <VideoPlayer />
            </View>
        );
    }
}

export default Index;
