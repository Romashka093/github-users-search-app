import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
  createItemsRequest,
  createItemsSuccess,
  createItemsError,
} from './resultItemCard_actions';

const repositories = createReducer([], {
  [createItemsSuccess]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [createItemsRequest]: () => true,
  [createItemsSuccess]: () => false,
  [createItemsError]: () => false,
});

const error = createReducer(null, {
  // [createItemsError]: (_, { payload }) => payload.message,
  [createItemsError]: (_, { payload }) => ({
    text: payload.message,
    statusCode: payload.response.status,
  }),
});

export default combineReducers({
  repositories,
  loading,
  error,
});
