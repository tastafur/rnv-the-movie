import apiFetch from './apiFetch';

export const getMovies = (data = {}) =>
  apiFetch({
    endPoint: encodeURI('/discover/movie'),
    method: 'GET',
    params: data.params
  });
