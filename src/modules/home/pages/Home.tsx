import { FC } from 'react';
import Layout from '@/common/components/layout/Layout';
import Carousel from '@/modules/home/components/carousel/Carousel';
import Hero from '@/modules/home/components/hero/Hero';
import RelatedProducts from '@/common/components/related-product/RelatedProducts';
import TrendingProducts from '@/modules/home/components/trending-products/TrendingProducts';

const Home: FC = () => {
	return (
		<Layout
			title='Home'
			description='More than just great coffee. Explore the menu, sign up for StarbucksĀ® Rewards, manage your gift card and more.'
		>
			<Hero>The happiest hour of the year</Hero>
			<Carousel />
			<TrendingProducts />
			<RelatedProducts title='Popular Products' limit={8} />
		</Layout>
	);
};

export default Home;
