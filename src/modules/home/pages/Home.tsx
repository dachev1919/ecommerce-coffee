import { FC } from 'react';
import Layout from '@/common/components/layout/Layout';
import Carousel from '@/common/components/ui/carousel/Carousel';

const Home: FC = () => {
	return (
		<Layout
			title='Home'
			description='More than just great coffee. Explore the menu, sign up for Starbucks® Rewards, manage your gift card and more.'
		>
			<Carousel />
		</Layout>
	);
};

export default Home;
