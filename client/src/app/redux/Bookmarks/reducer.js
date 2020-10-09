import { SAVE_BOOKMARK } from './actionTypes';

const initialState = {
  bookmarkWorldNews: [],
  bookmarkSport: [],
  bookmarkPolitics: [],
  bookmarkBusiness: [],
};

export default function bookmarkReducer(state = initialState, action) {
  switch(action.type) {
    case SAVE_BOOKMARK: {
      if (action.payload.section === 'World news') {
        return {
          ...state,
          bookmarkWorldNews: [
            ...state.bookmarkWorldNews,
            action.payload
          ]
        };
      }
      if (action.payload.section === 'Sport') {
        return {
          ...state,
          bookmarkSport: [
            ...state.bookmarkSport,
            action.payload
          ]
        }; 
      }
      if (action.payload.section === 'Politics') {
        return {
          ...state,
          bookmarkPolitics: [
            ...state.bookmarkPolitics,
            action.payload
          ]
        }; 
      }
      if (action.payload.section === 'Business') {
        return {
          ...state,
          bookmarkBusiness: [
            ...state.bookmarkBusiness,
            action.payload
          ]
        }; 
      }
      return state;
    }
    default:
      return state;
  }
}
