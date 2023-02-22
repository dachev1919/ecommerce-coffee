import React, { FC } from 'react';
import { COLORS } from '@/config/color.config';
import { Button } from '@chakra-ui/react';
import { useActions } from '@/hooks/useActions';
import { IProduct } from '@/@types/product.intarface';
import { TypeSize } from '@/store/cart/cart.types';

interface ICarouselButtonProps {
	product: IProduct;
	selectedSize: TypeSize;
}

const CarouselButton: FC<ICarouselButtonProps> = ({
	product,
	selectedSize
}) => {
	const { addToCart } = useActions();

	return (
		<Button
			onClick={() => addToCart({ product, quantity: 1, size: selectedSize })}
			color={COLORS.green}
			className='tracking-widest uppercase mx-auto block'
			marginTop={5}
			fontSize={12}
			borderRadius={20}
		>
			Add to basket
		</Button>
	);
};

export default CarouselButton;
