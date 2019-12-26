export const FETCH_MOVIES = 'FETCH_MOVIES';
export const SET_MOVIES = 'SET_MOVIES';

export function fetchMovies() {
  return {
    type: FETCH_MOVIES,
  };
}

export function setMovies(movies) {
  return {
    type: SET_MOVIES,
    payload: {
      movies
    }
  };
}
