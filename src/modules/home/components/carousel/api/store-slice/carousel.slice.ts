import { ICarouselInitialState } from './carousel.type';
import { createSlice } from '@reduxjs/toolkit';

const initialState: ICarouselInitialState = {
	activeItemIndex: 1
};

export const carouselSlice = createSlice({
	name: 'carousel',
	initialState,
	reducers: {
		setCarouselActiveIndex(state, action) {
			state.activeItemIndex = action.payload;
		}
	}
});
