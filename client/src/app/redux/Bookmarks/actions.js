import { SAVE_BOOKMARK } from './actionTypes';

export const saveBookmark = (data) => ({
  type: SAVE_BOOKMARK,
  payload: data
});