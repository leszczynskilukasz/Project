import { combineReducers, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import bookmarkReducer from './Bookmarks/reducer';

const rootReducer = combineReducers({
  bookmark: bookmarkReducer,
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['bookmark']
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
