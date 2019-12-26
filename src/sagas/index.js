import { all, fork } from 'redux-saga/effects';

import { watchFetchMoviesProcess } from './movies';
import { watchFetchSeriesProcess } from './series';

export default function* rootSagas() {
  yield all([
    fork(watchFetchMoviesProcess),
    fork(watchFetchSeriesProcess)
  ]);
}
