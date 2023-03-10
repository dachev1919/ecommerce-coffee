import React, { FC, useRef, useState } from 'react';
import cn from 'clsx';
import styles from '@/modules/home/components/carousel/Carousel.module.scss';
import Image from 'next/image';
import { IProduct } from '@/@types/product.intarface';
import { rotateToMouse, removeListener } from '../utils/hover-effect';
import { TypeSize } from '@/common/components/layout/header/cart/api/store-slice/cart.types';
import Link from 'next/link';
import { useCarouselHooks } from '@/utils/use-store-hooks';
import { useActions } from '@/hooks/useActions';
import ProductAddButton from '@/common/components/ui/product-add-button/ProductAddButton';
import ProductVariations from '@/common/components/ui/product-variations/ProductVariations';

interface ICarouselItemProps {
	product: IProduct;
	itemIndex: number;
}

const Item: FC<ICarouselItemProps> = ({ product, itemIndex }) => {
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
				<Link href={`/product/${product.slug}`}>
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
					<ProductVariations
						selectedSize={selectedSize}
						setSelectedSize={setSelectedSize}
					/>
				</div>

				{isActive && (
					<ProductAddButton selectedSize={selectedSize} product={product} />
				)}
			</div>
		</div>
	);
};

export default Item;
