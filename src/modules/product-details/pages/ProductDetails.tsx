import React, { FC } from 'react';
import Hero from '@/modules/home/components/hero/Hero';
import Carousel from '@/modules/home/components/carousel/Carousel';
import Layout from '@/common/components/layout/Layout';
import { IProductDetails } from '../../../../pages/ecommerce-coffee/product/[slug]';

const ProductDetails: FC<IProductDetails> = ({ product }) => {
	return (
		<Layout title={product.name} description={product.description}>
			<Hero classNames=''>The happiest hour of the year</Hero>
			<Carousel />
		</Layout>
	);
};

export default ProductDetails;
