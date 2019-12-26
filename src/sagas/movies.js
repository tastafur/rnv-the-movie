import { call, put, takeLatest } from 'redux-saga/effects';

// Services
import { getMovies } from '../services/movies';

// Actions
import { setMovies, FETCH_MOVIES } from '../actions/movies';

// utils errors
import { errorHandler } from './util/errorHandler'

export function* fetchMoviesProcess() {
  try {
    const resultMovies = yield call(getMovies, { params: { sort_by: 'popularity.desc' } });
    if(resultMovies) {
      yield put(setMovies(resultMovies.results))
    }
  } catch (e) {
    yield call(errorHandler, e)
  }
}

export function* watchFetchMoviesProcess() {
  yield takeLatest(FETCH_MOVIES, fetchMoviesProcess);
}
