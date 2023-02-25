import React, { FC } from 'react';
import ProductDetails from '../../src/modules/product-details/pages/ProductDetails';
import { GetStaticPaths, GetStaticProps } from 'next';
import { IProduct, IProductDetails } from '@/@types/product.intarface';
import { products } from '@/common/mock-data/produtcs.data';

const ProductDetailsPage: FC<IProductDetails> = ({ product }) => {
	return <ProductDetails product={product} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = products.map(({ slug }) => {
		return {
			params: { slug }
		};
	});

	return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<IProductDetails> = async ({
	params
}) => {
	const product =
		products.find(product => product.slug === params?.slug) || ({} as IProduct);
	return {
		props: {
			product: product
		}
	};
};
export default ProductDetailsPage;
