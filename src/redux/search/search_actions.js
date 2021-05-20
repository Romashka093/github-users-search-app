/* eslint-disable import/no-anonymous-default-export */
import { createAction } from '@reduxjs/toolkit';

const searchValue = createAction('searcher/changeValue');
const searchHistory = createAction('searcher/createHistory');

export default { searchValue, searchHistory };
