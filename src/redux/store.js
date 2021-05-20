import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import searchReducer from './search/search_reducer';
import itemReducer from './resultItemCard/resultItemCard_reduser';
import logger from 'redux-logger';
// import { applyMiddleware } from 'redux';
// import createDebounce from 'redux-debounced';

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    search: searchReducer,
    items: itemReducer,
  },
  middleware,

  devTools: process.env.NODE_ENV === 'development',
});

export default store;
