import { ADD_STRING_TO_STORE, GET_STRING_TO_STORE } from './constants';

const INITIAL_STATE = [];

function strings(state = INITIAL_STATE, action) {
  switch (action.type) {
    // Unused but left in just in case
    case ADD_STRING_TO_STORE: {
      if (Array.isArray(action.payload)) {
        return [...state, ...action.payload];
      }
      return [...state, action.payload];
    }
    case GET_STRING_TO_STORE: {
      return [...action.payload];
    }
    default:
      return state;
  }
}

export default strings;
