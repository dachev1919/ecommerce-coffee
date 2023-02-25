import React, { FC } from 'react';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import styles from '../../pages/ProductDetails.module.scss';
import { products } from '@/common/mock-data/produtcs.data';
import { IProduct } from '@/@types/product.intarface';

interface IProductNextPrevProps {
	currentId: number;
}

const ProductNextPrev: FC<IProductNextPrevProps> = ({ currentId }) => {
	const currentProduct: IProduct =
		products.find(product => product.id === currentId) || ({} as IProduct);
	const currentIndex = products.indexOf(currentProduct);

	const prevProduct: IProduct = products.slice(
		currentIndex - 1,
		currentIndex
	)[0];
	const nextProduct: IProduct = products.slice(
		currentIndex + 1,
		currentIndex + 2
	)[0];

	const lastProduct: IProduct = products[products.length - 1];
	const firstProduct: IProduct = products[0];

	const prevLink = `/product/${
		prevProduct ? prevProduct.slug : lastProduct.slug
	}`;
	const nextLink = `/product/${
		nextProduct ? nextProduct.slug : firstProduct.slug
	}`;

	return (
		<div className={styles['next-prev']}>
			<Link href={prevLink}>
				<ChevronLeftIcon fontSize={20} />
				Prev
			</Link>
			<Link href={nextLink}>
				Next
				<ChevronRightIcon fontSize={20} />
			</Link>
		</div>
	);
};

export default ProductNextPrev;
