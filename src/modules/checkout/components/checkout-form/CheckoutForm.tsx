import React, { FC, useState } from 'react';
import styles from '../../pages/Checkout.module.scss';
import FormInput from '@/modules/checkout/components/checkout-form/form-input/FormInput';
import { COLORS } from '@/config/color.config';
import { Button } from '@chakra-ui/react';

const CheckoutForm: FC = () => {
	const [email, setEmail] = useState<string>('');
	const [name, setName] = useState<string>('');
	const [phone, setPhone] = useState<string>('');
	const [address, setAddress] = useState<string>('');
	const [postCode, setPostCode] = useState<string>('');

	const formSubmitHandler = (e: any): void => {
		e.preventDefault();
		setEmail('');
		setName('');
		setPhone('');
		setAddress('');
		setPostCode('');
	};

	return (
		<div className={styles.form}>
			<form onSubmit={formSubmitHandler}>
				<FormInput
					inputValue={name}
					setInputValue={setName}
					placeholder='Name'
				/>
				<FormInput
					inputValue={email}
					setInputValue={setEmail}
					placeholder='Email'
				/>
				<FormInput
					inputValue={phone}
					setInputValue={setPhone}
					placeholder='Phone'
				/>
				<FormInput
					inputValue={address}
					setInputValue={setAddress}
					placeholder='Address'
				/>
				<FormInput
					inputValue={postCode}
					setInputValue={setPostCode}
					placeholder='Post Code'
				/>
				<Button
					type='submit'
					color={COLORS.white}
					sx={{ boxShadow: '0px 5px 10px rgba(0, 124, 89, 0.25)' }}
					className={`tracking-widest duration-300 transition uppercase block ml-auto`}
					marginTop={5}
					_hover={{
						backgroundColor: COLORS['dark-green'],
						boxShadow: '0px 6px 10px rgba(0, 124, 89, 0.3)'
					}}
					_active={{ backgroundColor: COLORS['black-green'] }}
					bg={COLORS.green}
					fontSize={12}
					borderRadius={20}
				>
					Checkout
				</Button>
			</form>
		</div>
	);
};

export default CheckoutForm;
