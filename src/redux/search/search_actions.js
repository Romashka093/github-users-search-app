import actionTypes from './search_types';

export const searchValue = value => ({
  type: actionTypes.VALUE,
  payload: value,
});

export const searchHistory = value => ({
  type: actionTypes.ADD_HISTORY,
  payload: value,
});
