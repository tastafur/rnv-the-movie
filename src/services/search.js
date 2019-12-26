import apiFetch from './apiFetch';

export const search = (data = {}) =>
  apiFetch({
    endPoint: encodeURI('/search/multi'),
    method: 'GET',
    params: data.params
  });
