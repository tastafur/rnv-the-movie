import { combineReducers } from 'redux';

import {
  createNavigationReducer,
} from 'react-navigation-redux-helpers';

import { movies } from './movies';
import { series } from './series';

import { AppNavigator } from '../navigators/AppNavigator';

const navReducer = createNavigationReducer(AppNavigator);

export default combineReducers({
  nav: navReducer,
  movies,
  series
})
