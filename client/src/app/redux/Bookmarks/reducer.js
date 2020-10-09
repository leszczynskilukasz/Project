import { SAVE_BOOKMARK, DELETE_BOOKMARK } from './actionTypes';

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
    case DELETE_BOOKMARK: {
      if (action.payload.section === 'World news') {
        const index = state.bookmarkWorldNews.findIndex(article => article.id === action.payload.id);
        return {
          ...state,
          bookmarkWorldNews: [
            ...state.bookmarkWorldNews.slice(0, index),
            ...state.bookmarkWorldNews.slice(index + 1)
          ]
        };
      }
      if (action.payload.section === 'Sport') {
        const index = state.bookmarkSport.findIndex(article => article.id === action.payload.id);
        return {
          ...state,
          bookmarkSport: [
            ...state.bookmarkSport.slice(0, index),
            ...state.bookmarkSport.slice(index + 1)
          ]
        };
      }
      if (action.payload.section === 'Politics') {
        const index = state.bookmarkPolitics.findIndex(article => article.id === action.payload.id);
        return {
          ...state,
          bookmarkPolitics: [
            ...state.bookmarkPolitics.slice(0, index),
            ...state.bookmarkPolitics.slice(index + 1)
          ]
        };
      }
      if (action.payload.section === 'Business') {
        const index = state.bookmarkBusiness.findIndex(article => article.id === action.payload.id);
        return {
          ...state,
          bookmarkBusiness: [
            ...state.bookmarkBusiness.slice(0, index),
            ...state.bookmarkBusiness.slice(index + 1)
          ]
        };
      }
      return state;
    }
    default:
      return state;
  }
}
