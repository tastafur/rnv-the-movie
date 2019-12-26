import { SET_CONFIGURATION } from '../actions/configuration'

export const initialConfiguration = {};
// Here I could normalize the data so that it is easier for me to update one of the elements or delete it, for me it is a common use in other projects but I don't see it here
// https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape/
// https://redux.js.org/recipes/structuring-reducers/updating-normalized-data
export function configuration(state = initialConfiguration, { type, payload }) {
  switch (type) {
    case SET_CONFIGURATION:
      return {
        ...state,
        ...payload.configuration
      };
    default:
      return state;
  }
}
