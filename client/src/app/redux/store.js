import { combineReducers, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import counterReducer from '../../features/counter/counterSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['counter']
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
