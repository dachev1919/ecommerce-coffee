import { ICartItem } from '@/@types/cart-item.interface';

export interface IInitialState {
	items: ICartItem[];
}

export interface IChangeQuantityPayload extends Pick<ICartItem, 'id'> {
	type: 'minus' | 'plus';
}

export interface ICartItemPayload extends Omit<ICartItem, 'id'> {}
