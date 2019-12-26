export const FETCH_SERIES = 'FETCH_SERIES';
export const SET_SERIES = 'SET_SERIES';

export function fetchSeries() {
  return {
    type: FETCH_SERIES,
  };
}

export function setSeries(series) {
  return {
    type: SET_SERIES,
    payload: {
      series
    }
  };
}
