import { normalizeState } from '../utils/commons'
import { SET_SERIES } from '../actions/series'

export const initialSeries = {};
// Here I could normalize the data so that it is easier for me to update one of the elements or delete it, for me it is a common use in other projects but I don't see it here
// https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape/
// https://redux.js.org/recipes/structuring-reducers/updating-normalized-data
export function series(state = initialSeries, { type, payload }) {
  switch (type) {
    case SET_SERIES:
      return {
        ...state,
        ...normalizeState(payload.series)
      };
    default:
      return state;
  }
}
