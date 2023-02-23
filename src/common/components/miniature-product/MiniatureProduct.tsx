import React, { FC, useState } from 'react';
import Image from 'next/image';
import { IProduct } from '@/@types/product.intarface';
import { TypeSize } from '@/common/components/layout/header/cart/api/store-slice/cart.types';
import Link from 'next/link';
import ProductAddButton from '@/common/components/ui/product-add-button/ProductAddButton';
import ProductVariations from '@/common/components/ui/product-variations/ProductVariations';
import styles from './MiniatureProduct.module.scss';
import { formatToCurrency } from '@/utils/format-to-currency';

interface ICarouselItemProps {
	product: IProduct;
}

const CarouselItem: FC<ICarouselItemProps> = ({ product }) => {
	const [selectedSize, setSelectedSize] = useState<TypeSize>('GRANDE');

	return (
		<div className={styles.miniature}>
			<Link href={`/ecommerce-coffee/product/${product.slug}`}>
				<Image
					className={styles.image}
					alt={product.name}
					src={product.images[0]}
					width={330}
					height={330}
				/>
			</Link>
			<p className={styles.price}>{formatToCurrency(product.price)}</p>
			<Link href={`/ecommerce-coffee/product/${product.slug}`}>
				<h2 className={styles.heading}>{product.name}</h2>
			</Link>

			<ProductVariations
				darkStyle={true}
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
