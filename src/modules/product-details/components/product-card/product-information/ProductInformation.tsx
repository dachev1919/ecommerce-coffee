import React, { Dispatch, FC, SetStateAction } from 'react';
import styles from '../ProductCard.module.scss';
import { IProductDetails } from '@/@types/product.intarface';
import Image from 'next/image';

interface IProductInformation extends IProductDetails {
	currentImageIndex: number;
	setCurrentImageIndex: Dispatch<SetStateAction<number>>;
}

const ProductInformation: FC<IProductInformation> = ({
	product,
	currentImageIndex,
	setCurrentImageIndex
}) => {
	return (
		<div className={styles.information}>
			<h1 className={styles.title}>{product.name}</h1>
			<div className={styles.description}>
				<p>{product.description}</p>
			</div>
			<div className={styles.thumb}>
				{product.images.map((image, index) => (
					<button
						key={index}
						className={`${index === currentImageIndex && styles.active}`}
						onClick={() => setCurrentImageIndex(index)}
					>
						<Image src={image} alt='product thumb' width={80} height={80} />
					</button>
				))}
			</div>
		</div>
	);
};

export default ProductInformation;
