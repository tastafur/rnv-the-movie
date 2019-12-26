import { all, fork } from 'redux-saga/effects';

import { watchFetchConfigurationProcess } from './configuration'
import { watchFetchMoviesProcess } from './movies';
import { watchFetchSeriesProcess } from './series';

export default function* rootSagas() {
  yield all([
    fork(watchFetchConfigurationProcess),
    fork(watchFetchMoviesProcess),
    fork(watchFetchSeriesProcess),
  ]);
}
