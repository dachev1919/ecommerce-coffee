import { FC } from 'react';
import styles from './Header.module.scss';
import Menu from './menu/Menu';
import Cart from './cart/Cart';
import Search from './search/Search';

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Menu />
			<Search />
			<Cart />
		</header>
	);
};

export default Header;
