import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import actions from './search_actions';

const query = createReducer('', {
  [actions.searchValue]: (_, { payload }) => payload,
});

const history = createReducer([], {
  [actions.searchHistory]: (state, { payload }) => [...state, payload],
});

export default combineReducers({
  query,
  history,
});
