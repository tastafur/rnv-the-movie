import { setMovies } from '../actions/movies'
import { movies as moviesReducer } from './movies';
import mocks from '../../mocks/data.json'

describe('Reducers', () => {
  describe('Movies', () => {
    it('should handle initial state', () => {
      const initialState = [];
      expect(moviesReducer(initialState, [])).toMatchSnapshot()
    });

    it('should set MOVIES', () => {
      const { movies } = mocks;
      const currentState = {};

      expect(moviesReducer(currentState, setMovies(movies))).toMatchSnapshot()
    })
  })
});
