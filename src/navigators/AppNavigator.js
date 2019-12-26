import { Api, WEB } from 'renative';
import { createStackNavigator, StackViewTransitionConfigs } from 'react-navigation';

import MoviesStackNavigation from './MoviesStackNavigation';
import SeriesStackNavigation from './SeriesStackNavigation';
import SearchStackNavigation from './SearchStackNavigation';

import MainScreen from '../screens/Main'

export const AppNavigator = createStackNavigator(
  {
    Main: {
      screen: MainScreen,
    },

    MoviesStack: {
      screen: MoviesStackNavigation,
      navigationOptions: {
        title: 'Detail',
      },
    },

    SeriesStack: {
      screen: SeriesStackNavigation,
      navigationOptions: {
        title: 'Detail',
      },
    },

    SearchStack: {
      screen: SearchStackNavigation,
    },
  },
  {
    initialRouteName: 'Main',
    headerMode: Api.platform === WEB ? 'none' : 'screen',
    transitionConfig: () => StackViewTransitionConfigs.SlideFromRightIOS
  }
);
