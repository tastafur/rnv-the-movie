import { setMovies } from './movies';
import mocks from '../../mocks/data.json';

describe('Actions', () => {
  describe('Movies', () => {
    const { movies } = mocks;
    it('setCountries should create MOVIES action', () => {
      expect(setMovies(movies)).toMatchSnapshot()
    });
  })
});
