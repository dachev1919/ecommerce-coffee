import { FC, useState } from 'react';
import styles from './Search.module.scss';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const Search: FC = () => {
	const [searchTerm, setSearchTerm] = useState<string>('');

	return (
		<div className={styles.search}>
			<InputGroup className={styles['search__input']} size='xs'>
				<Input
					variant='flushed'
					value={searchTerm}
					type='search'
					placeholder='Search'
					_hover={{
						borderColor: '#929292'
					}}
					_focus={{
						boxShadow: 'none',
						borderColor: '#3a3a3a'
					}}
					onChange={e => setSearchTerm(e.target.value)}
				/>
				<InputRightElement
					pointerEvents='none'
					children={<SearchIcon color={'#afafaf'} />}
				/>
			</InputGroup>
		</div>
	);
};

export default Search;
