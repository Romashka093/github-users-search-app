import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
  createItemsRequest,
  createItemsSuccess,
  createItemsError,
} from './resultItemCard_actions';

const items = createReducer([], {
  [createItemsSuccess]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [createItemsRequest]: () => true,
  [createItemsSuccess]: () => false,
  [createItemsError]: () => false,
});

export default combineReducers({
  items,
  loading,
});
