import { useSelector } from 'react-redux';
import { TypeRootState } from '@/store/store';

export const useCart = () => {
	const cartItems = useSelector((state: TypeRootState) => state.cart.items);

	const totalPrice = cartItems.reduce(
		(sum, item) => item.product.price * item.quantity + sum,
		0
	);

	return { items: cartItems, totalPrice };
};
