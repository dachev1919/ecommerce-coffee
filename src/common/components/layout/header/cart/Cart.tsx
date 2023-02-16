import React, { FC } from 'react';
import styles from './Cart.module.scss';
import CartItem from '@/common/components/layout/header/cart/cart-item/CartItem';
import {
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	DrawerHeader,
	DrawerBody,
	DrawerFooter,
	Button,
	useDisclosure
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { TypeRootState } from '@/store/store';

const Cart: FC = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef<HTMLButtonElement>(null);
	const items = useSelector((state: TypeRootState) => state.cart.items);

	return (
		<div className={styles.cart}>
			<button className={styles.heading} ref={btnRef} onClick={onOpen}>
				<span className={styles.badge}>0</span>
				<span className={styles.text}>My Basket</span>
			</button>
			<Drawer
				isOpen={isOpen}
				placement='right'
				onClose={onClose}
				finalFocusRef={btnRef}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader className='border border-top-baige'>
						My Basket
					</DrawerHeader>

					<DrawerBody>
						{items.map(item => (
							<CartItem key={item.id} item={item} />
						))}
					</DrawerBody>

					<DrawerFooter
						className='border border-top-baige'
						justifyContent={'space-between'}
					>
						<div className={styles.footer}>
							<p>Total:</p>
							<span>$100</span>
						</div>
						<Button colorScheme='green'>Checkout</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</div>
	);
};

export default Cart;
