import { call, put, debounce } from 'redux-saga/effects';

// Services
import { search } from '../services/search';

// Actions
import { setSearch, FETCH_SEARCH } from '../actions/search';

// utils errors
import { errorHandler } from './util/errorHandler'

export function* fetchSearchProcess({payload: {query}}) {
  try {
    const resultSearch = yield call(search, { params: { query } });
    if(resultSearch) {
      yield put(setSearch(resultSearch.results))
    }
  } catch (e) {
    yield call(errorHandler, e)
  }
}

export function* watchFetchSearchProcess() {
  yield debounce(800, FETCH_SEARCH, fetchSearchProcess);
}
