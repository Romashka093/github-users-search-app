/* eslint-disable import/no-anonymous-default-export */
import actionsType from './resultItemCard_types';

const createItem = item => ({
  type: actionsType.CREATE_ITEM,
  payload: {
    ...item,
  },
});

export default { createItem };
