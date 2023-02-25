import React, { FC, useState } from 'react';
import styles from './ProductCard.module.scss';
import ProductInformation from './product-information/ProductInformation';
import ProductImage from './product-image/ProductImage';
import ProductActions from './product-actions/ProductActions';
import { IProductDetails } from '@/@types/product.intarface';

const ProductCard: FC<IProductDetails> = ({ product }) => {
	const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

	return (
		<section>
			<div className={styles.card}>
				<ProductInformation
					product={product}
					currentImageIndex={currentImageIndex}
					setCurrentImageIndex={setCurrentImageIndex}
				/>
				<ProductImage product={product} currentImageIndex={currentImageIndex} />
				<ProductActions product={product} />
			</div>
		</section>
	);
};

export default ProductCard;
