import { combineReducers } from 'redux';

import {
  createNavigationReducer,
} from 'react-navigation-redux-helpers';

import { configuration } from './configuration';
import { movies } from './movies';
import { series } from './series';
import { entertainments } from './search';

import { AppNavigator } from '../navigators/AppNavigator';

const navReducer = createNavigationReducer(AppNavigator);

export default combineReducers({
  nav: navReducer,
  configuration,
  movies,
  series,
  entertainments
})
