import React, { FC, useState } from 'react';
import styles from '../ProductCard.module.scss';
import { IProductDetails } from '@/@types/product.intarface';
import StarRatingComponent from 'react-star-rating-component';
import ProductVariations from '@/common/components/ui/product-variations/ProductVariations';
import { TypeSize } from '@/common/components/layout/header/cart/api/store-slice/cart.types';
import { Button, HStack, Input, useNumberInput } from '@chakra-ui/react';
import { COLORS } from '@/config/color.config';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import ProductAddButton from '@/common/components/ui/product-add-button/ProductAddButton';

const ProductActions: FC<IProductDetails> = ({ product }) => {
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
			<div className={styles.review}>
				<span>Review: </span>
				<StarRatingComponent
					name='rate1'
					starCount={5}
					value={product.rating}
					editing={false}
				/>
			</div>
			<div className={styles.variations}>
				<span>Variations: </span>
				<ProductVariations
					darkStyle={true}
					selectedSize={selectedSize}
					setSelectedSize={setSelectedSize}
				/>
			</div>
			<div className={styles.quantity}>
				<span>Quantity: </span>
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
			</div>
			<div className={styles.add}>
				<ProductAddButton
					green={true}
					centering={false}
					selectedSize={selectedSize}
					product={product}
					quantity={productQuantity}
				/>
			</div>
		</div>
	);
};

export default ProductActions;
