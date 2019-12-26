import { createStackNavigator } from 'react-navigation';

import DetailScreen from '../screens/secondaries/Detail';
import PlayerVideoScreen from '../screens/secondaries/PlayerVideo';


export default createStackNavigator(
  {
    Detail: {
      screen: DetailScreen,
    },

    PlayerVideo: {
      screen: PlayerVideoScreen,
    },
  },
  {
    initialRouteName: 'Detail'
  }
);
