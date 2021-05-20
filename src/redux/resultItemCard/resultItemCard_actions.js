import { createAction } from '@reduxjs/toolkit';

export const createItemsRequest = createAction('items/createItemsRequest');
export const createItemsSuccess = createAction('items/createItemsSuccess');
export const createItemsError = createAction('items/createItemsError');
