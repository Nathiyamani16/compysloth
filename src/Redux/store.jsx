import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productsReducer from './productSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
}
const rootReducer = combineReducers({
  products: productsReducer,
});
const rootReducerPresested = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
    reducer: rootReducerPresested,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    devTools: import.meta.env.DEV
});
export const persistor = persistStore(store);
