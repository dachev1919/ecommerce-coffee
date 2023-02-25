import React, { FC } from 'react';
import styles from './CheckoutInfo.module.scss';
import { useStoreHooks } from '@/utils/use-store-hooks';
import { formatToCurrency } from '@/utils/format-to-currency';
import Image from 'next/image';
import Link from 'next/link';

const CheckoutInfo: FC = () => {
	const { items, totalPrice } = useStoreHooks();
	return (
		<div className={styles.info}>
			<div className={styles.products}>
				{items.map(({ product, quantity }) => (
					<div className={styles.product}>
						<div className={styles.image}>
							<Link href={`/ecommerce-coffee/product/${product.slug}`}>
								<Image
									src={product.images[0]}
									alt={`product-${product.id}`}
									width={50}
									height={50}
								/>
								<div className={styles.badge}>{quantity}</div>
							</Link>
						</div>
						<div className={styles.name}>
							<Link href={`/ecommerce-coffee/product/${product.slug}`}>
								<p>{product.name}</p>
							</Link>
						</div>
						<div className={styles.price}>
							<p>{formatToCurrency(product.price * quantity)}</p>
						</div>
					</div>
				))}
			</div>
			<div className={styles.subtotal}>
				<div className={styles.text}>
					<p>Subtotal</p>
					<span>{formatToCurrency(totalPrice)}</span>
				</div>
				<div className={styles.text}>
					<p>Shipping</p>
					<span>FREE</span>
				</div>
			</div>
			<div className={styles.total}>
				<div className={styles.text}>
					<p>Total</p>
					<span>{formatToCurrency(totalPrice)}</span>
				</div>
			</div>
		</div>
	);
};

export default CheckoutInfo;
