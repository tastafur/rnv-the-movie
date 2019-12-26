import { call, put, takeLatest, all } from 'redux-saga/effects';

// Services
import { getConfiguration } from '../services/configuration';

// Actions
import { setConfiguration, FETCH_CONFIGURATION } from '../actions/configuration';
import { fetchMovies } from '../actions/movies';
import { fetchSeries } from '../actions/series';

// utils errors
import { errorHandler } from './util/errorHandler'

export function* fetchConfigurationProcess() {
  try {
    const resultConfiguration = yield call(getConfiguration);
    if(resultConfiguration) {
      yield put(setConfiguration(resultConfiguration));
      yield all([
        put(fetchMovies()),
        put(fetchSeries())
      ])
    }
  } catch (e) {
    yield call(errorHandler, e)
  }
}

export function* watchFetchConfigurationProcess() {
  yield takeLatest(FETCH_CONFIGURATION, fetchConfigurationProcess);
}
