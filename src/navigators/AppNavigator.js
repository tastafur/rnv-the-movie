import { Api, WEB } from 'renative';
import { createStackNavigator } from 'react-navigation';

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
    },

    SeriesStack: {
      screen: SeriesStackNavigation,
    },

    SearchStack: {
      screen: SearchStackNavigation,
    },
  },
  {
    initialRouteName: 'Main',
    headerMode: Api.platform === WEB ? 'none' : 'screen'

  }
);
