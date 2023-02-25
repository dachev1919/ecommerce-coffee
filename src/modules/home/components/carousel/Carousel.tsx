import { FC } from 'react';
import styles from '@/modules/home/components/carousel/Carousel.module.scss';
import Item from '@/modules/home/components/carousel/item/Item';
import { products } from '@/common/mock-data/produtcs.data';

const Carousel: FC = () => {
	return (
		<section className={styles.carousel}>
			{products.slice(0, 4).map((item, index) => (
				<Item itemIndex={index} key={item.id} product={item} />
			))}
		</section>
	);
};

export default Carousel;
