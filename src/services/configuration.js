import apiFetch from './apiFetch';

export const getConfiguration = () =>
  apiFetch({
    endPoint: encodeURI('/configuration'),
    method: 'GET'
  });
