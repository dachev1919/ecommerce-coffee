import React, { FC } from 'react';
import styles from '../Footer.module.scss';
import { footerMenu } from '@/common/components/layout/footer/menu/menu.data';
import Link from 'next/link';

const Menu: FC = () => {
	return (
		<div className={styles.menu}>
			<ul>
				{footerMenu.map(item => (
					<li key={`footer-link-${item.name}`}>
						<Link href={item.link}>{item.name}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Menu;
