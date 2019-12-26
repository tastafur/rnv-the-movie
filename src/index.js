import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './configureStore';

const { store, AppWithNavigationState } = configureStore();

export const App = () =>
  <Provider store={store}>
    <AppWithNavigationState />
  </Provider>;
