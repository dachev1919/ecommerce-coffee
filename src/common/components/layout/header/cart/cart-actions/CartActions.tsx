import { FC } from 'react';
import { useNumberInput, HStack, Button, Input } from '@chakra-ui/react';
import { AddIcon, MinusIcon, DeleteIcon } from '@chakra-ui/icons';
import { useActions } from '@/hooks/useActions';

interface ICartAction {
	productId: number;
}

const CartActions: FC<ICartAction> = ({ productId }) => {
	const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
		useNumberInput({
			step: 1,
			defaultValue: 1,
			min: 1,
			max: 99,
			precision: 0
		});

	const inc = getIncrementButtonProps();
	const dec = getDecrementButtonProps();
	const input = getInputProps();
	const { removeFromCart } = useActions();

	return (
		<div className='mt-2 flex items-center'>
			<HStack maxW='90px'>
				<Button size='xs' {...dec}>
					<MinusIcon fontSize={8} />
				</Button>
				<Input
					size='xs'
					{...input}
					focusBorderColor='#00A389'
					readOnly
					_hover={{ cursor: 'default' }}
				/>
				<Button size='xs' {...inc}>
					<AddIcon fontSize={8} />
				</Button>
			</HStack>
			<Button
				onClick={() => removeFromCart({ id: productId })}
				className='ml-8'
				size='xs'
			>
				<DeleteIcon color='#F23C3D' />
			</Button>
		</div>
	);
};

export default CartActions;
