import { cartSlice } from '@/common/components/layout/header/cart/api/store-slice/cart.slice';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { carouselSlice } from '@/modules/home/components/carousel/api/store-slice/carousel.slice';

const rootAction = {
	...cartSlice.actions,
	...carouselSlice.actions
};

export const useActions = () => {
	const dispatch = useDispatch();

	return useMemo(() => bindActionCreators(rootAction, dispatch), [dispatch]);
};
