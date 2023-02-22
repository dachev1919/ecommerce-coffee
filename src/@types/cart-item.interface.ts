import { IProduct } from './product.intarface';
import { TypeSize } from '@/common/components/layout/header/cart/api/store-slice/cart.types';

export interface ICartItem {
	id: number;
	product: IProduct;
	quantity: number;
	size: TypeSize;
}
