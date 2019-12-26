export const FETCH_CONFIGURATION = 'FETCH_CONFIGURATION';
export const SET_CONFIGURATION = 'SET_CONFIGURATION';

export function fetchConfiguration() {
  return {
    type: FETCH_CONFIGURATION,
  };
}

export function setConfiguration(configuration) {
  return {
    type: SET_CONFIGURATION,
    payload: {
      configuration
    }
  };
}
