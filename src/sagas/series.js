import { call, put, takeLatest } from 'redux-saga/effects';

// Services
import { getSeries } from '../services/series';

// Actions
import { setSeries, FETCH_SERIES } from '../actions/series';

// utils errors
import { errorHandler } from './util/errorHandler'

export function* fetchSeriesProcess() {
  try {
    const resultSeries = yield call(getSeries, { params: { sort_by: 'popularity.desc', with_genres: '99,10751' } });
    if(resultSeries) {
      yield put(setSeries(resultSeries.results))
    }
  } catch (e) {
    yield call(errorHandler, e)
  }
}

export function* watchFetchSeriesProcess() {
  yield takeLatest(FETCH_SERIES, fetchSeriesProcess);
}
