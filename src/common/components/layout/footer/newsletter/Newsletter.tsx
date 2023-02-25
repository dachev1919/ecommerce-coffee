import React, { FC, useState } from 'react';
import styles from '../Footer.module.scss';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';

const Newsletter: FC = () => {
	const [newsletterTerm, setNewsletterTerm] = useState<string>('');
	const date = new Date();
	const currentYear = date.getFullYear();

	return (
		<div className={styles.newsletter}>
			<InputGroup className={styles['search__input']} size='xs'>
				<Input
					variant='flushed'
					value={newsletterTerm}
					type='search'
					placeholder='Subscribe'
					_hover={{
						borderColor: '#929292'
					}}
					_focus={{
						boxShadow: 'none',
						borderColor: '#3a3a3a'
					}}
					onChange={e => setNewsletterTerm(e.target.value)}
				/>
				<InputRightElement
					pointerEvents='none'
					children={<EmailIcon color={'#afafaf'} />}
				/>
			</InputGroup>
			<p>
				<span>&#169;</span>
				{currentYear} Developed by Oleh Dachev
			</p>
		</div>
	);
};

export default Newsletter;
