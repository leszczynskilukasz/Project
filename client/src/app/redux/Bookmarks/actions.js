import { SAVE_BOOKMARK, DELETE_BOOKMARK } from './actionTypes';

export const saveBookmark = (data) => ({
  type: SAVE_BOOKMARK,
  payload: data
});

export const deleteBookmark = (data) => ({
  type: DELETE_BOOKMARK,
  payload: data
});