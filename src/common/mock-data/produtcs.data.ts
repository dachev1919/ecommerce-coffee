import { IProduct } from '@/@types/product.intarface';
import prod1 from '@/common/assets/images/product-1.png';
import prod2 from '@/common/assets/images/product-2.png';
import prod3 from '@/common/assets/images/product-3.png';
import prod4 from '@/common/assets/images/product-4.png';
import prod5 from '@/common/assets/images/product-5.png';
import prod6 from '@/common/assets/images/product-6.png';

export const products: IProduct[] = [
	{
		id: 1,
		name: 'Midnight mint mocha frappuccino',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, officiis.',
		price: 9,
		reviews: [],
		images: [prod1, prod2, prod3]
	},
	{
		id: 2,
		name: 'Peppermint mocha starbucks coffee',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, officiis.',
		price: 8,
		reviews: [],
		images: [prod2, prod3, prod4]
	},
	{
		id: 3,
		name: 'Matcha creme frappuccino coffee',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, officiis.',
		price: 7,
		reviews: [],
		images: [prod3, prod4, prod5]
	},
	{
		id: 4,
		name: 'Irish Cream Cold Brew adipisicing',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, officiis.',
		price: 12,
		reviews: [],
		images: [prod4, prod5, prod6]
	},
	{
		id: 5,
		name: 'Caramel Brulée Crème frappuccino',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, officiis.',
		price: 11,
		reviews: [],
		images: [prod5, prod6, prod1]
	},
	{
		id: 6,
		name: 'Fruit Starbucks Refreshers frappuccino',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, officiis.',
		price: 13,
		reviews: [],
		images: [prod6, prod1, prod2]
	}
];
