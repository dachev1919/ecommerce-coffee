import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import image from '@/common/assets/images/logo.png';
import MenuItem from './menu-item/MenuItem';
import { menu } from './menu.data';
import styles from './Menu.module.scss';

const Menu: FC = () => {
	return (
		<div className={styles.menu}>
			<Link href='/ecommerce-coffee'>
				<Image src={image} width={80} height={80} alt='ecommerce-coffee' />
			</Link>
			<nav>
				<ul>
					{menu.map((item, index) => (
						<MenuItem key={`${index}-${item.name}`} item={item} />
					))}
				</ul>
			</nav>
		</div>
	);
};

export default Menu;
