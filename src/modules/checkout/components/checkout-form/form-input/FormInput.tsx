import React, { ComponentProps, Dispatch, FC, SetStateAction } from 'react';
import { FormControl, Input } from '@chakra-ui/react';

interface IFormInput {
	inputValue: string;
	setInputValue: Dispatch<SetStateAction<string>>;
	placeholder?: ComponentProps<typeof Input>['placeholder'];
	type?: ComponentProps<typeof Input>['type'];
}

const FormInput: FC<IFormInput> = ({
	inputValue,
	setInputValue,
	placeholder = '',
	type = 'text'
}) => {
	return (
		<FormControl>
			<Input
				variant='flushed'
				placeholder={placeholder}
				_hover={{
					borderColor: '#929292'
				}}
				_focus={{
					boxShadow: 'none',
					borderColor: '#3a3a3a'
				}}
				type={type}
				value={inputValue}
				onChange={e => setInputValue(e.target.value)}
			/>
		</FormControl>
	);
};

export default FormInput;
