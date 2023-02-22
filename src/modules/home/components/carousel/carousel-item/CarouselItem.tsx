import React, { FC, useRef, useState } from 'react';
import cn from 'clsx';
import styles from '@/modules/home/components/carousel/Carousel.module.scss';
import Image from 'next/image';
import { IProduct } from '@/@types/product.intarface';
import { rotateToMouse, removeListener } from '../utils/hover-effect';
import CarouselButton from '@/modules/home/components/carousel/carousel-item/carousel-button/CarouselButton';
import CarouselVariations from '@/modules/home/components/carousel/carousel-item/carousel-variations/CarouselVariations';
import { TypeSize } from '@/common/components/layout/header/cart/api/store-slice/cart.types';
import Link from 'next/link';
import { useCarouselHooks } from '@/utils/use-store-hooks';
import { useActions } from '@/hooks/useActions';

interface ICarouselItemProps {
	product: IProduct;
	itemIndex: number;
}

const CarouselItem: FC<ICarouselItemProps> = ({ product, itemIndex }) => {
	const { setCarouselActiveIndex } = useActions();
	const [selectedSize, setSelectedSize] = useState<TypeSize>('GRANDE');
	const { activeIndex: selectedItemIndex } = useCarouselHooks();
	const isActive = itemIndex === selectedItemIndex;
	const inputRef = useRef<HTMLDivElement>(null);

	return (
		<div
			onClick={() => setCarouselActiveIndex(itemIndex)}
			ref={inputRef}
			onMouseLeave={isActive ? () => removeListener(inputRef) : undefined}
			onMouseMove={isActive ? e => rotateToMouse(e, inputRef) : undefined}
			className={cn(styles.item, {
				[styles.active]: isActive,
				['transform-none']: !isActive
			})}
		>
			<div>
				<Link href='/ecommerce-coffee'>
					<Image
						className={styles.image}
						alt={product.name}
						src={product.images[0]}
						width={330}
						height={330}
					/>
					<h2 className={styles.heading}>{product.name}</h2>
				</Link>

				<div className={styles['info-wrapper']}>
					<p className={styles.description}>{product.description}</p>
					<CarouselVariations
						selectedSize={selectedSize}
						setSelectedSize={setSelectedSize}
					/>
				</div>

				{isActive && (
					<CarouselButton selectedSize={selectedSize} product={product} />
				)}
			</div>
		</div>
	);
};

export default CarouselItem;
