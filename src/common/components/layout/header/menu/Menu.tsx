import React, { FC, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import image from '@/common/assets/images/logo.png';
import MenuItem from './menu-item/MenuItem';
import { menu } from './menu.data';
import styles from './Menu.module.scss';
import { HamburgerIcon } from '@chakra-ui/icons';
import { CloseButton } from '@chakra-ui/react';

const Menu: FC = () => {
	const [visibleMobileMenu, setVisibleMobileMenu] = useState<boolean>(false);

	return (
		<div
			className={`${styles.menu} ${visibleMobileMenu ? styles.visible : ''}`}
		>
			<div
				className={styles.hamburger}
				onClick={() => setVisibleMobileMenu(prevState => !prevState)}
			>
				<HamburgerIcon />
			</div>

			<Link href='/'>
				<Image src={image} width={60} height={60} alt='ecommerce-coffee' />
			</Link>
			<nav className={`${visibleMobileMenu ? styles.visible : ''}`}>
				<div
					className={styles.overlay}
					onClick={() => setVisibleMobileMenu(false)}
				></div>
				<ul>
					<div
						className={styles.close}
						onClick={() => setVisibleMobileMenu(false)}
					>
						<CloseButton />
					</div>
					{menu.map((item, index) => (
						<MenuItem key={`${index}-${item.name}`} item={item} />
					))}
				</ul>
			</nav>
		</div>
	);
};

export default Menu;
