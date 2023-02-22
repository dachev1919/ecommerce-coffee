import React, { Dispatch, FC, SetStateAction } from 'react';
import styles from '@/modules/home/components/carousel/Carousel.module.scss';
import { TypeSize } from '@/store/cart/cart.types';
import cn from 'clsx';

const SIZES: TypeSize[] = ['SHORT', 'TALL', 'GRANDE', 'VENTI'];

interface ICarouselVariationsProps {
	selectedSize: TypeSize;
	setSelectedSize: Dispatch<SetStateAction<TypeSize>>;
}

const CarouselVariations: FC<ICarouselVariationsProps> = ({
	selectedSize,
	setSelectedSize
}) => {
	return (
		<div className={styles.variations}>
			{SIZES.map(size => (
				<button
					key={size}
					className={cn({ [styles.active]: selectedSize === size })}
					onClick={() => setSelectedSize(size)}
				>
					{size}
				</button>
			))}
		</div>
	);
};

export default CarouselVariations;
