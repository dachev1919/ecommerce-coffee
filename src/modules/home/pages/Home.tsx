import { FC } from 'react';
import Layout from '@/common/components/layout/Layout';
import Carousel from '@/modules/home/components/carousel/Carousel';
import Hero from '@/modules/home/components/hero/Hero';

const Home: FC = () => {
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

export default Home;
