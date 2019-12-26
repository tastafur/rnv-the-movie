import apiFetch from './apiFetch';

export const getSeries = (data = {}) =>
  apiFetch({
    endPoint: encodeURI('/discover/tv'),
    method: 'GET',
    params: data.params
  });
