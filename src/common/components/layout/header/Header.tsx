import { FC, useEffect, useState } from 'react';
import styles from './Header.module.scss';
import Menu from './menu/Menu';
import Cart from './cart/Cart';
import Search from './search/Search';
import { getWindowSize } from '@/utils/width-height-window-size';

const Header: FC = () => {
	const [isSticky, setIsSticky] = useState(false);
	const { width: windowWidth } = getWindowSize();

	useEffect(() => {
		const handleScroll = () => {
			if (window.pageYOffset > 0 && windowWidth > 767) {
				setIsSticky(true);
			} else {
				setIsSticky(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header className={`${styles.header} ${isSticky ? styles.sticky : ''}`}>
			<Menu />
			<Search />
			<Cart />
		</header>
	);
};

export default Header;
