import { IProduct } from './product.intarface';

export interface ICartItem {
	id: number;
	product: IProduct;
	quantity: number;
}
