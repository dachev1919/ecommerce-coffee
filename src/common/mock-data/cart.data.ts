import { ICartItem } from '@/@types/cart-item.interface';
import { products } from '@/common/mock-data/produtcs.data';

export const cart: ICartItem[] = [
	{
		id: 1,
		quantity: 1,
		product: products[0]
	},
	{
		id: 2,
		quantity: 2,
		product: products[1]
	}
];
