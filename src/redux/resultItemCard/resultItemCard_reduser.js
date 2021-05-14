import { combineReducers } from 'redux';
import actionTypes from './resultItemCard_types';

const nameReducer = (state = '', { type, payload }) => {
  switch (type) {
    case actionTypes.CREATE_ITEM:
      return [...state, payload];

    default:
      return state;
  }
};
// const languageReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case 'result':
//       break;

//     default:
//       return state;
//   }
// };
// const descriptionReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case 'result':
//       break;

//     default:
//       return state;
//   }
// };

export default combineReducers({
  name: nameReducer,
  //   language: 'languageReducer',
  //   description: 'descriptionReducer',
});
