import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import searchReducer from './search/search_reducer';
import itemReducer from './resultItemCard/resultItemCard_reduser';

const rootReducer = combineReducers({
  search: searchReducer,
  items: itemReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
