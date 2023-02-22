import { ICartItem } from '@/@types/cart-item.interface';
import { products } from '@/common/mock-data/produtcs.data';

export const cart: ICartItem[] = [
	{
		id: Math.floor(Math.random() * 100000000),
		quantity: 1,
		product: products[0],
		size: 'SHORT'
	},
	{
		id: Math.floor(Math.random() * 100000000),
		quantity: 2,
		product: products[1],
		size: 'GRANDE'
	}
];
