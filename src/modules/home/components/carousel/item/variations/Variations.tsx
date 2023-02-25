import React, { Dispatch, FC, SetStateAction } from 'react';
import styles from '@/modules/home/components/carousel/Carousel.module.scss';
import { TypeSize } from '@/common/components/layout/header/cart/api/store-slice/cart.types';
import cn from 'clsx';

const SIZES: TypeSize[] = ['TALL', 'GRANDE', 'VENTI'];

interface ICarouselVariationsProps {
	selectedSize: TypeSize;
	setSelectedSize: Dispatch<SetStateAction<TypeSize>>;
}

const Variations: FC<ICarouselVariationsProps> = ({
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

export default Variations;
