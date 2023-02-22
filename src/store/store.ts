import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { cartSlice } from '@/common/components/layout/header/cart/api/store-slice/cart.slice';
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
import { carouselSlice } from '@/modules/home/components/carousel/api/store-slice/carousel.slice';

const persistConfig = {
	key: 'ecommerce-coffee',
	storage,
	whitelist: ['cart', 'carousel'] // which of the reducers will be added
};

const rootReducer = combineReducers({
	cart: cartSlice.reducer,
	carousel: carouselSlice.reducer
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
