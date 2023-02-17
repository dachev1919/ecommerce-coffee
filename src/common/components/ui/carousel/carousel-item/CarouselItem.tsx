import React, { FC, useRef, MouseEvent } from 'react';
import cn from 'clsx';
import styles from '../Carousel.module.scss';
import Image from 'next/image';
import { IProduct } from '@/@types/product.intarface';

const CarouselItem: FC<{ item: IProduct }> = ({ item }) => {
	let bounds: DOMRect;
	const inputRef = useRef<HTMLDivElement>(null);
	const glowRef = useRef<HTMLDivElement>(null);

	const rotateToMouse = (e: MouseEvent<HTMLDivElement>) => {
		if (inputRef && inputRef.current) {
			bounds = inputRef.current.getBoundingClientRect();
		}
		const mouseX = e.clientX;
		const mouseY = e.clientY;
		const leftX = mouseX - bounds.x;
		const topY = mouseY - bounds.y;
		const center = {
			x: leftX - bounds.width / 2,
			y: topY - bounds.height / 2
		};
		const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

		if (inputRef.current) {
			inputRef.current.style.transform = `
      scale3d(1.07, 1.07, 1.07)
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance) * 2}deg
      )
    `;
		}

		if (glowRef.current) {
			glowRef.current.style.backgroundImage = `
      radial-gradient(
        circle at
        ${center.x * 2 + bounds.width / 2}px
        ${center.y * 2 + bounds.height / 2}px,
        #ffffff55,
        #0000000f
      )
    `;
		}
	};
	const removeListener = () => {
		if (inputRef.current) {
			inputRef.current.style.transform = '';
			inputRef.current.style.background = '';
		}
	};

	return (
		<div
			ref={inputRef}
			onMouseLeave={removeListener}
			onMouseMove={rotateToMouse}
			className={cn(styles.item, { [styles.active]: item.id === 2 })}
		>
			<Image
				className={styles.image}
				alt={item.name}
				src={item.images[0]}
				width={330}
				height={330}
			/>
			<h2 className={styles.heading}>{item.name}</h2>
			<p className={styles.description}>{item.description}</p>
		</div>
	);
};

export default CarouselItem;
