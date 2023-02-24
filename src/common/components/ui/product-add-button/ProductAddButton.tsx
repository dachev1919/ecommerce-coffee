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
	centering?: boolean;
}

const ProductAddButton: FC<ICarouselButtonProps> = ({
	product,
	selectedSize,
	green,
	quantity = 1,
	centering = true
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
			sx={
				green
					? { boxShadow: '0px 5px 10px rgba(0, 124, 89, 0.25)' }
					: { boxShadow: '0px 5px 10px rgba(255, 255, 255, 0.1)' }
			}
			className={`tracking-widest duration-300 transition uppercase block w-10/12${
				centering ? ' mx-auto' : ''
			}`}
			marginTop={5}
			_hover={
				green
					? {
							backgroundColor: COLORS['dark-green'],
							boxShadow: '0px 6px 10px rgba(0, 124, 89, 0.3)'
					  }
					: {
							backgroundColor: theme.colors.gray['100'],
							boxShadow: '0px 6px 10px rgba(255, 255, 255, 0.2)'
					  }
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
