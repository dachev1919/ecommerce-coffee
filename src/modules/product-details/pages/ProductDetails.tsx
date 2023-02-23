import React, { FC } from 'react';
import Hero from '@/modules/home/components/hero/Hero';
import Carousel from '@/modules/home/components/carousel/Carousel';
import Layout from '@/common/components/layout/Layout';

const ProductDetails: FC = () => {
	return (
		<Layout
			title='Home'
			description='More than just great coffee. Explore the menu, sign up for Starbucks® Rewards, manage your gift card and more.'
		>
			<Hero classNames=''>The happiest hour of the year</Hero>
			<Carousel />
		</Layout>
	);
};

export default ProductDetails;
