import React, { FC, useState } from 'react';
import Filtering, { EnumSorting } from './filtering/Filtering';
import { products } from '@/common/mock-data/produtcs.data';
import MiniatureProduct from '@/common/components/miniature-product/MiniatureProduct';
import styles from './RelatedProducts.module.scss';

const RelatedProducts: FC = () => {
	const [sortType, setSortType] = useState<EnumSorting>(EnumSorting.NEWEST);
	return (
		<section className={styles['related-products']}>
			<div className={styles.heading}>
				<p className={styles.title}>Related Products</p>
				<Filtering />
			</div>
			<div className={styles.products}>
				{products.slice(0, 4).map(product => (
					<MiniatureProduct product={product} />
				))}
			</div>
		</section>
	);
};

export default RelatedProducts;
