import { FC } from 'react';
import Image from 'next/image';
import { ICartItem } from '@/@types/cart-item.interface';
import styles from '../Cart.module.scss';
import truncate from '@/utils/string-truncate';
import CartActions from '../cart-actions/CartActions';
import { formatToCurrency } from '@/utils/format-to-currency';

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
					<div>
						<span>size: </span>
						{item.size.toLowerCase()}
					</div>
					{formatToCurrency(item.product.price)}
				</div>
				<CartActions
					productId={item.product.id}
					productQuantity={item.quantity}
					productSize={item.size}
				/>
			</div>
		</div>
	);
};

export default CartItem;
