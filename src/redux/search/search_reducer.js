import { combineReducers } from 'redux';
import actionTypes from './search_types';
const queryReducer = (state = '', { type, payload }) => {
  switch (type) {
    case actionTypes.VALUE:
      return (state = payload);

    default:
      return state;
  }
};

const historyReduser = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_HISTORY:
      return [...state, payload];

    default:
      return state;
  }
};

export default combineReducers({
  query: queryReducer,
  history: historyReduser,
});
