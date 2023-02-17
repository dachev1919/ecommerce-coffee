import { FC } from 'react';
import styles from './Carousel.module.scss';
import CarouselItem from '@/common/components/ui/carousel/carousel-item/CarouselItem';
import { products } from '@/common/mock-data/produtcs.data';

const Carousel: FC = () => {
	return (
		<div className={styles.carousel}>
			{products.slice(0, 4).map(item => (
				<CarouselItem key={item.id} item={item} />
			))}
		</div>
	);
};

export default Carousel;
