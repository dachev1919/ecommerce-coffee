import React, { FunctionComponent, PropsWithChildren } from 'react';
import styles from './Hero.module.scss';
import Link from 'next/link';
import awards from '@/common/assets/images/rewards.png';
import Image from 'next/image';

const Hero: FunctionComponent<PropsWithChildren<{ classNames?: string }>> = ({
	children,
	classNames
}) => {
	return (
		<section className={styles.hero}>
			<div className={styles.left}>
				<Image src={awards} alt='awards' width={150} height={50} />
				<Link className={styles.link} href='/ecommerce-coffee'>
					Get more info
				</Link>
			</div>
			<div className={styles.right}>
				<p className={styles.h1}>{children}</p>
				<p className={styles.text}>
					Sign up to get exclusive access to deals on drinks this holiday
					season.
				</p>
				<Link
					className={`${styles.link} ${styles.green}`}
					href='/ecommerce-coffee'
				>
					Send me magic
				</Link>
			</div>
		</section>
	);
};

export default Hero;
