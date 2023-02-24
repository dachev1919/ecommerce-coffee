import React, { FC } from 'react';
import styles from '../ProductCard.module.scss';
import { IProductDetails } from '@/@types/product.intarface';
import Image from 'next/image';
import { formatToCurrency } from '@/utils/format-to-currency';

interface IProductImage extends IProductDetails {
	currentImageIndex: number;
}

const ProductImage: FC<IProductImage> = ({ product, currentImageIndex }) => {
	return (
		<div className={styles.image}>
			<div className={styles.wrapper}>
				<Image
					src={product.images[currentImageIndex]}
					alt={product.name}
					width={450}
					height={450}
				/>
				<div className={styles.price}>{formatToCurrency(product.price)}</div>
			</div>
		</div>
	);
};

export default ProductImage;
