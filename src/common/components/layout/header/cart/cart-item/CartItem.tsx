import { FC } from 'react';
import Image from 'next/image';
import { ICartItem } from '@/@types/cart-item.interface';
import styles from '../Cart.module.scss';
import truncate from '@/utils/string-truncate';
import CartActions from '@/common/components/layout/header/cart/cart-item/cart-actions/CartActions';

const CartItem: FC<{ item: ICartItem }> = ({ item }) => {
	return (
		<div className={styles.item}>
			<Image
				src={item.product.images[0]}
				width={100}
				height={100}
				alt={item.product.name}
			/>
			<div>
				<div className={styles.name}>{`${truncate(
					item.product.name,
					15
				)}`}</div>
				<div className={styles.price}>
					{new Intl.NumberFormat('en-EN', {
						style: 'currency',
						currency: 'USD'
					}).format(item.product.price)}
				</div>
				<CartActions />
			</div>
		</div>
	);
};

export default CartItem;
