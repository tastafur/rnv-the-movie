export const FETCH_SEARCH = 'FETCH_SEARCH';
export const SET_SEARCH = 'SET_SEARCH';

export function fetchSearch(query) {
  return {
    type: FETCH_SEARCH,
    payload: {
      query
    }
  };
}

export function setSearch(entertainments) {
  return {
    type: SET_SEARCH,
    payload: {
      entertainments
    }
  };
}
