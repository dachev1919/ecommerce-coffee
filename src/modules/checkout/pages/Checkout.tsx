import React, { FC } from 'react';
import Layout from '@/common/components/layout/Layout';
import styles from './Checkout.module.scss';
import CheckoutForm from '../components/checkout-form/CheckoutForm';
import CheckoutInfo from '../components/checkout-info/CheckoutInfo';

const Checkout: FC = () => {
	return (
		<Layout title='Checkout' description='Checkout page'>
			<section className={styles.checkout}>
				<h1>Checkout</h1>
				<div className={styles.body}>
					<CheckoutForm />
					<CheckoutInfo />
				</div>
			</section>
		</Layout>
	);
};

export default Checkout;
