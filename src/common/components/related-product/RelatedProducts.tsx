import React, { FC, useEffect, useState } from 'react';
import Sorting, { EnumSorting } from './sorting/Sorting';
import { products } from '@/common/mock-data/produtcs.data';
import MiniatureProduct from '@/common/components/miniature-product/MiniatureProduct';
import styles from './RelatedProducts.module.scss';
import { IProduct } from '@/@types/product.intarface';
import { productSorting } from '@/common/components/related-product/utils/product-sorting';

interface IRelatedProductsProps {
	limit?: number;
	title?: string;
}

const RelatedProducts: FC<IRelatedProductsProps> = ({
	limit = 4,
	title = 'Related Products'
}) => {
	const [sortType, setSortType] = useState<EnumSorting>(EnumSorting.NEWEST);
	const [productList, setProductList] = useState<IProduct[]>(products);

	useEffect(() => {
		setProductList(productSorting(products, sortType));
	}, [sortType]);

	return (
		<section className={styles['related-products']}>
			<div className={styles.heading}>
				<p className={styles.title}>{title}</p>
				<Sorting sortType={sortType} setSortType={setSortType} />
			</div>
			<div className={styles.products}>
				{productList.slice(0, limit).map(product => (
					<MiniatureProduct key={product.id} product={product} />
				))}
			</div>
		</section>
	);
};

export default RelatedProducts;
