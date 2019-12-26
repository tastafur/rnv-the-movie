import { createStackNavigator } from 'react-navigation';

import SearchScreen from '../screens/Search';
import DetailScreen from '../screens/secondaries/Detail';
import PlayerVideoScreen from '../screens/secondaries/PlayerVideo';


export default createStackNavigator(
  {
    Search: {
      screen: SearchScreen,
    },

    Detail: {
      screen: DetailScreen,
    },

    PlayerVideo: {
      screen: PlayerVideoScreen,
    },
  },
  {
    initialRouteName: 'Search'
  }
);
