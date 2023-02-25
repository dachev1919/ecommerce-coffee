import React, { FC } from 'react';
import styles from '../Footer.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import image from '@/common/assets/images/logo.png';

const Heading: FC = () => {
	return (
		<div className={styles.heading}>
			<Link href='/ecommerce-coffee'>
				<Image src={image} width={90} height={90} alt='ecommerce-coffee' />
			</Link>
		</div>
	);
};

export default Heading;
