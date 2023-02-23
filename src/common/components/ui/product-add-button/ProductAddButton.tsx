import React, { FC } from 'react';
import { COLORS } from '@/config/color.config';
import { Button, theme } from '@chakra-ui/react';
import { useActions } from '@/hooks/useActions';
import { IProduct } from '@/@types/product.intarface';
import { TypeSize } from '@/common/components/layout/header/cart/api/store-slice/cart.types';
import { useSelector } from 'react-redux';
import { TypeRootState } from '@/store/store';
import { toast } from 'react-toastify';

interface ICarouselButtonProps {
	product: IProduct;
	selectedSize: TypeSize;
	green?: boolean;
	quantity?: number;
}

const ProductAddButton: FC<ICarouselButtonProps> = ({
	product,
	selectedSize,
	green,
	quantity = 1
}) => {
	const { addToCart, removeFromCart } = useActions();
	const { items: cartItems } = useSelector(
		(state: TypeRootState) => state.cart
	);
	const isExistingInCart = cartItems.some(
		cartItem =>
			cartItem.product.id === product.id && cartItem.size === selectedSize
	);

	const buttonClickHandler = () => {
		if (isExistingInCart) {
			removeFromCart({ id: product.id, size: selectedSize });
			toast.success('Product removed');
		} else {
			addToCart({ product, quantity, size: selectedSize });
		}
	};

	return (
		<Button
			onClick={buttonClickHandler}
			color={green ? COLORS.white : COLORS.green}
			className='tracking-widest uppercase mx-auto block w-10/12'
			marginTop={5}
			_hover={
				green
					? { backgroundColor: COLORS['dark-green'] }
					: { backgroundColor: theme.colors.gray['100'] }
			}
			_active={
				green
					? { backgroundColor: COLORS['black-green'] }
					: { backgroundColor: theme.colors.gray['200'] }
			}
			bg={green ? COLORS.green : COLORS.white}
			fontSize={12}
			borderRadius={20}
		>
			{isExistingInCart ? 'Remove from basket' : 'Add to basket'}
		</Button>
	);
};

export default ProductAddButton;
