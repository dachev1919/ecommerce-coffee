import React, { FC, useState } from 'react';
import Image from 'next/image';
import { IProduct } from '@/@types/product.intarface';
import { TypeSize } from '@/common/components/layout/header/cart/api/store-slice/cart.types';
import Link from 'next/link';
import ProductAddButton from '@/common/components/ui/product-add-button/ProductAddButton';
import ProductVariations from '@/common/components/ui/product-variations/ProductVariations';
import styles from './MiniatureProduct.module.scss';

interface ICarouselItemProps {
	product: IProduct;
}

const CarouselItem: FC<ICarouselItemProps> = ({ product }) => {
	const [selectedSize, setSelectedSize] = useState<TypeSize>('GRANDE');

	return (
		<div className={styles.miniature}>
			<Link href='/ecommerce-coffee'>
				<Image
					className={styles.image}
					alt={product.name}
					src={product.images[0]}
					width={330}
					height={330}
				/>
				<h2 className={styles.heading}>{product.name}</h2>
			</Link>

			<ProductVariations
				selectedSize={selectedSize}
				setSelectedSize={setSelectedSize}
			/>

			<ProductAddButton
				green={true}
				selectedSize={selectedSize}
				product={product}
			/>
		</div>
	);
};

export default CarouselItem;
