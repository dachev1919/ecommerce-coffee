import { FC } from 'react';
import styles from './Cart.module.scss';

const Cart: FC = () => {
	return (
		<div className={styles.cart}>
			<span>0</span>
			<p>My Basket</p>
		</div>
	);
};

export default Cart;
