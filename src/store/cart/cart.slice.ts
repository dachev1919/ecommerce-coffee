import {
	ICartItemPayload,
	IChangeQuantityPayload,
	ICartInitialState,
	TypeSize
} from './cart.types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { cart } from '@/common/mock-data/cart.data';
import { toast } from 'react-toastify';

const initialState: ICartInitialState = {
	items: cart
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<ICartItemPayload>) => {
			const item = state.items.find(
				item =>
					item.product.id === action.payload.product.id &&
					item.size === action.payload.size
			);

			if (!item) {
				state.items.push({
					...action.payload,
					id: Math.floor(Math.random() * 100000000)
				});
				toast.success('Product added successfully');
			} else {
				toast.success('Product already added');
			}
		},

		removeFromCart: (
			state,
			action: PayloadAction<{ id: number; size: TypeSize }>
		) => {
			state.items = state.items.filter(
				item =>
					!(
						item.product.id === action.payload.id &&
						item.size === action.payload.size
					)
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
