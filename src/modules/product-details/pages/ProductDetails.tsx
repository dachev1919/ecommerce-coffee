import React, { FC } from 'react';
import Layout from '@/common/components/layout/Layout';
import RelatedProducts from '@/common/components/related-product/RelatedProducts';
import ProductBreadcrumbs from '../components/product-breadcrumbs/ProductBreadcrumbs';
import ProductNextPrev from '../components/product-next-prev/ProductNextPrev';
import styles from './ProductDetails.module.scss';
import ProductCard from '../components/product-card/ProductCard';
import { IProductDetails } from '@/@types/product.intarface';

const ProductDetails: FC<IProductDetails> = ({ product }) => {
	return (
		<Layout title={product.name} description={product.description}>
			<div className={styles.header}>
				<ProductBreadcrumbs productTitle={product.name} />
				<ProductNextPrev currentId={product.id} />
			</div>
			<ProductCard product={product} />

			<RelatedProducts />
		</Layout>
	);
};

export default ProductDetails;
