import { ICartItem } from '@/@types/cart-item.interface';

export interface IInitialState {
	items: ICartItem[];
}

export interface ICartItemPayload extends Omit<ICartItem, 'id'> {}
