import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { cartSlice } from '@/store/slice';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'ecommerce-coffee',
	storage,
	whitelist: ['cart'] // which of the reducers will be added
};

const rootReducer = combineReducers({
	cart: cartSlice.reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		})
});

export type TypeRootState = ReturnType<typeof rootReducer>;

export const persistor = persistStore(store);
