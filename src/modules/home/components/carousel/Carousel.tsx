import { FC } from 'react';
import styles from '@/modules/home/components/carousel/Carousel.module.scss';
import CarouselItem from '@/modules/home/components/carousel/carousel-item/CarouselItem';
import { products } from '@/common/mock-data/produtcs.data';

const Carousel: FC = () => {
	return (
		<div className={styles.carousel}>
			{products.slice(0, 4).map((item, index) => (
				<CarouselItem itemIndex={index} key={item.id} product={item} />
			))}
		</div>
	);
};

export default Carousel;
