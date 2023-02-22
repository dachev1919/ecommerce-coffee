import { ICartItem } from '@/@types/cart-item.interface';

export interface ICartInitialState {
	items: ICartItem[];
}

export interface IChangeQuantityPayload extends Pick<ICartItem, 'id'> {
	type: 'minus' | 'plus';
}

export type TypeSize = 'TALL' | 'GRANDE' | 'VENTI';

export interface ICartItemPayload extends Omit<ICartItem, 'id'> {}
