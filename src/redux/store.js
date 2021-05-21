import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import searchReducer from './search/search_reducer';
import itemReducer from './resultItemCard/resultItemCard_reduser';
import storage from 'redux-persist/lib/storage';
// import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // logger,
];

const searchHistoryConfig = {
  key: 'githubRepositoriesSearchHistory',
  storage,
  blacklist: ['query'],
};

const store = configureStore({
  reducer: {
    search: persistReducer(searchHistoryConfig, searchReducer),
    data: itemReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };
