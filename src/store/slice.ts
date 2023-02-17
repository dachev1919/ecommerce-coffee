import {
	ICartItemPayload,
	IChangeQuantityPayload,
	IInitialState
} from '@/@types/storeTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { cart } from '@/common/mock-data/cart.data';

const initialState: IInitialState = {
	items: cart
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<ICartItemPayload>) => {
			const nextId = state.items.length + 1;
			state.items.push({
				...action.payload,
				id: nextId
			});
		},
		removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
			state.items = state.items.filter(
				item => item.product.id !== action.payload.id
			);
		},
		changeQuantity: (state, action: PayloadAction<IChangeQuantityPayload>) => {
			const { id, type } = action.payload;
			const item = state.items.find(item => item.id === id);

			if (item) {
				type === 'plus' ? item.quantity++ : item.quantity--;
			}
		}
	}
});
