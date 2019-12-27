import { Api, WEB } from 'renative';
import { createStackNavigator,  StackViewTransitionConfigs } from 'react-navigation';

import MainScreen from '../screens/Main';
import DetailScreen from '../screens/secondaries/Detail';
import PlayerVideoScreen from '../screens/secondaries/PlayerVideo';
import SearchScreen from '../screens/Search';

export const AppNavigator = createStackNavigator(
  {
    Main: {
      screen: MainScreen,
    },

    Detail: {
      screen: DetailScreen,
    },

    PlayerVideo: {
      screen: PlayerVideoScreen,
      navigationOptions: {
        header: null,
      },
    },

    Search: {
      screen: SearchScreen,
    },
  },
  {
    initialRouteName: 'Main',
    headerMode: Api.platform === WEB ? 'none' : 'screen',
    transitionConfig: () => StackViewTransitionConfigs.SlideFromRightIOS
  }
);
