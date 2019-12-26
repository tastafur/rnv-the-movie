import { createStackNavigator } from 'react-navigation';

import DetailScreen from '../screens/secondaries/Detail';
import PlayerVideoScreen from '../screens/secondaries/PlayerVideo';

export default createStackNavigator(
  {
    Detail: {
      screen: DetailScreen,
      navigationOptions: {
        header: null
      },
    },

    PlayerVideo: {
      screen: PlayerVideoScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Detail',
  }
);
