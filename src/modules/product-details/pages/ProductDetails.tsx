import React, { FC } from 'react';
import Layout from '@/common/components/layout/Layout';
import { IProductDetails } from '../../../../pages/ecommerce-coffee/product/[slug]';
import RelatedProducts from '@/common/components/related-product/RelatedProducts';
import ProductBreadcrumbs from '@/modules/product-details/components/product-breadcrumbs/ProductBreadcrumbs';
import ProductNextPrev from '@/modules/product-details/components/product-next-prev/ProductNextPrev';
import styles from './ProductDetails.module.scss';

const ProductDetails: FC<IProductDetails> = ({ product }) => {
	return (
		<Layout title={product.name} description={product.description}>
			<div className={styles.header}>
				<ProductBreadcrumbs productTitle={product.name} />
				<ProductNextPrev currentId={product.id} />
			</div>

			<RelatedProducts />
		</Layout>
	);
};

export default ProductDetails;
