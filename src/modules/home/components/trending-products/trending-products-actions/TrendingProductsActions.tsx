import React, { FC, useState } from 'react';
import ProductVariations from '@/common/components/ui/product-variations/ProductVariations';
import { Button, HStack, Input, theme, useNumberInput } from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import ProductAddButton from '@/common/components/ui/product-add-button/ProductAddButton';
import { TypeSize } from '@/common/components/layout/header/cart/api/store-slice/cart.types';
import { IProduct } from '@/@types/product.intarface';
import styles from '../TrendingProducts.module.scss';
import { COLORS } from '@/config/color.config';

interface IProps {
	product: IProduct;
}

const TrendingProductsActions: FC<IProps> = ({ product }) => {
	const [selectedSize, setSelectedSize] = useState<TypeSize>('GRANDE');
	const [productQuantity, setProductQuantity] = useState<number>(1);

	const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
		useNumberInput({
			step: 1,
			defaultValue: productQuantity,
			min: 1,
			max: 99,
			precision: 0
		});

	const inc = getIncrementButtonProps();
	const dec = getDecrementButtonProps();
	const input = getInputProps();

	const decrementQuantityHandler = () => {
		if (productQuantity > 1) {
			setProductQuantity(prevState => --prevState);
		}
	};

	const incrementQuantityHandler = () => {
		if (productQuantity < 99) {
			setProductQuantity(prevState => ++prevState);
		}
	};

	return (
		<div className={styles.actions}>
			<ProductVariations
				darkStyle={true}
				selectedSize={selectedSize}
				setSelectedSize={setSelectedSize}
			/>
			<div className={styles.add}>
				<HStack maxW='138px'>
					<Button
						bg={COLORS['light-gray']}
						color={COLORS.black}
						_hover={{ backgroundColor: COLORS['light-beige'] }}
						_active={{ backgroundColor: COLORS['light-beige'] }}
						size='md'
						onClick={decrementQuantityHandler}
						{...dec}
					>
						<MinusIcon fontSize={8} />
					</Button>
					<Input
						size='md'
						{...input}
						sx={{ borderColor: COLORS['light-gray'] }}
						color={COLORS.black}
						focusBorderColor='#00A389'
						readOnly
						_hover={{ cursor: 'default' }}
						_focusVisible={{ borderColor: COLORS.beige }}
					/>
					<Button
						bg={COLORS['light-gray']}
						color={COLORS.black}
						_hover={{ backgroundColor: COLORS['light-beige'] }}
						_active={{ backgroundColor: COLORS['light-beige'] }}
						onClick={incrementQuantityHandler}
						size='md'
						{...inc}
					>
						<AddIcon fontSize={8} />
					</Button>
				</HStack>
				<ProductAddButton
					green={true}
					selectedSize={selectedSize}
					product={product}
					quantity={productQuantity}
				/>
			</div>
		</div>
	);
};

export default TrendingProductsActions;
