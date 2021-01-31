import {
  CHANGE_FILTER
} from '../actions/actionsType';

const initialState = '';

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.payload.filter;
    default:
    return state;
  }
}

