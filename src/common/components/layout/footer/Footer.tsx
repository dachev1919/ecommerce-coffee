import React, { FC } from 'react';
import styles from './Footer.module.scss';
import Newsletter from './newsletter/Newsletter';
import Menu from './menu/Menu';
import Heading from './heading/Heading';

const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<Heading />
			<Menu />
			<Newsletter />
		</footer>
	);
};

export default Footer;
