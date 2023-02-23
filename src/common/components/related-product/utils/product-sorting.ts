import { IProduct } from '@/@types/product.intarface';
import { EnumSorting } from '@/common/components/related-product/sorting/Sorting';

export const productSorting = (
	items: IProduct[],
	sortBy: EnumSorting
): IProduct[] => {
	let newItems: IProduct[] = items;

	if (items.length > 0) {
		switch (sortBy) {
			case EnumSorting.NEWEST:
			case EnumSorting.OLDEST:
				newItems = newItems.sort(
					(a, b) => Date.parse(a.date) - Date.parse(b.date)
				);
				if (sortBy === EnumSorting.OLDEST) {
					newItems.reverse();
				}
				break;
			case EnumSorting.LOW_TO_HIGH_PRICE:
			case EnumSorting.HIGH_TO_LOW_PRICE:
				newItems = newItems.sort((a, b) => a.price - b.price);
				if (sortBy === EnumSorting.LOW_TO_HIGH_PRICE) {
					newItems.reverse();
				}
				break;
		}
	}

	return newItems;
};
