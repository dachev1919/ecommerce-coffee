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
import { formatToCurrency } from '@/utils/format-to-currency';
import { useStoreHooks } from '@/utils/use-store-hooks';
import { COLORS } from '@/config/color.config';
import Link from 'next/link';

const Cart: FC = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef<HTMLButtonElement>(null);
	const { items, totalPrice } = useStoreHooks();

	return (
		<div className={styles.cart}>
			<button className={styles.heading} ref={btnRef} onClick={onOpen}>
				<span className={styles.badge}>{items.length}</span>
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
						{items.length ? (
							items.map(item => <CartItem key={item.id} item={item} />)
						) : (
							<p className={styles.info}>Basket is empty!</p>
						)}
					</DrawerBody>

					<DrawerFooter
						className='border border-top-baige'
						justifyContent={'space-between'}
					>
						<div className={styles.footer}>
							<p>Total:</p>
							<span>{formatToCurrency(totalPrice)}</span>
						</div>
						<Link href='/checkout'>
							<Button
								bg={COLORS.green}
								_hover={{ backgroundColor: COLORS['dark-green'] }}
								_active={{ backgroundColor: COLORS['black-green'] }}
								colorScheme='green'
							>
								Checkout
							</Button>
						</Link>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</div>
	);
};

export default Cart;
