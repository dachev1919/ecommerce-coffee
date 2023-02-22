import { FC } from 'react';
import { useNumberInput, HStack, Button, Input } from '@chakra-ui/react';
import { AddIcon, MinusIcon, DeleteIcon } from '@chakra-ui/icons';
import { useActions } from '@/hooks/useActions';
import { TypeSize } from '@/store/cart/cart.types';

interface ICartAction {
	productId: number;
	productQuantity: number;
	productSize: TypeSize;
}

const CartActions: FC<ICartAction> = ({
	productId,
	productQuantity,
	productSize
}) => {
	const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
		useNumberInput({
			step: 1,
			defaultValue: productQuantity,
			min: 1,
			max: 99,
			precision: 0
		});

	const inc = getIncrementButtonProps();
	const dec = getDecrementButtonProps();
	const input = getInputProps();
	const { removeFromCart, changeQuantity } = useActions();

	console.log(productId, productSize);

	return (
		<div className='mt-2 flex items-center'>
			<HStack maxW='90px'>
				<Button
					onClick={() =>
						productQuantity > 1 &&
						changeQuantity({ id: productId, type: 'minus' })
					}
					size='xs'
					{...dec}
				>
					<MinusIcon fontSize={8} />
				</Button>
				<Input
					size='xs'
					{...input}
					focusBorderColor='#00A389'
					readOnly
					_hover={{ cursor: 'default' }}
				/>
				<Button
					onClick={() => changeQuantity({ id: productId, type: 'plus' })}
					size='xs'
					{...inc}
				>
					<AddIcon fontSize={8} />
				</Button>
			</HStack>
			<Button
				onClick={() => removeFromCart({ id: productId, size: productSize })}
				className='ml-8'
				size='xs'
			>
				<DeleteIcon color='#F23C3D' />
			</Button>
		</div>
	);
};

export default CartActions;
