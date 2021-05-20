/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import {
  createItemsRequest,
  createItemsSuccess,
  createItemsError,
} from './resultItemCard_actions';

axios.defaults.baseURL = 'https://api.github.com/';

const createItems = query => async dispatch => {
  dispatch(createItemsRequest());

  try {
    const { data } = await axios.get(
      `search/repositories?q=${query}{&page,per_page,sort,order}`,
    );
    dispatch(createItemsSuccess(data.items));
  } catch (error) {
    dispatch(createItemsError(error));
  }
};

export default { createItems };
