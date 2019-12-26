import { call as mockCall} from 'redux-saga-test-plan/matchers';
import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';

// Utils
import { normalizeState } from '../utils/commons';

import mocks from '../../mocks/data';

// Sagas
import { fetchMoviesProcess } from './movies'

// Actions
import { setMovies } from '../actions/movies';

// Reducers
import { movies } from '../reducers/movies';

// Services
import { getMovies } from '../services/movies';

describe('Saga', () => {
  describe('fetchMoviesProcess', () => {
    const state = {};
    it('should fetch all movies', () => {
      const expectedFetchCallSuccess = {
        results: mocks.movies
      };
      const expectedActionMovies = setMovies(mocks.movies);
      const expectedFinalState = normalizeState(mocks.movies);
      return expectSaga(fetchMoviesProcess)
        .withState(state)
        .withReducer(movies)
        .provide([
          [mockCall.fn(getMovies), expectedFetchCallSuccess],
        ])
        .put(expectedActionMovies)
        .hasFinalState(expectedFinalState)
        .run(false)
    });
    it('should fetch all movies and throw a error', () => {
      const expectedFetchCallError = {
        "status_message": "Invalid API key: You must be granted a valid key.",
        "success": false,
        "status_code": 7
      };
      const expectedFinalState = {};
      return expectSaga(fetchMoviesProcess)
        .withState(state)
        .withReducer(movies)
        .provide([
          [mockCall.fn(getMovies), throwError(expectedFetchCallError)],
        ])
        .hasFinalState(expectedFinalState)
        .run(false)
    });
  });
});
