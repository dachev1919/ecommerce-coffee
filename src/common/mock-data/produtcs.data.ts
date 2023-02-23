import { IProduct } from '@/@types/product.intarface';
import prod1 from '@/common/assets/images/product-1.png';
import prod2 from '@/common/assets/images/product-2.png';
import prod3 from '@/common/assets/images/product-3.png';
import prod4 from '@/common/assets/images/product-4.png';
import prod5 from '@/common/assets/images/product-5.png';
import prod6 from '@/common/assets/images/product-6.png';
import prod7 from '@/common/assets/images/product-7.png';
import prod8 from '@/common/assets/images/product-8.png';

export const products: IProduct[] = [
	{
		id: 1,
		name: 'Midnight mint mocha frappuccino',
		slug: 'midnight-mint-mocha-frappuccino',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, officiis.',
		price: 9,
		reviews: [],
		images: [prod1, prod2, prod3],
		date: '2022-12-20',
		rating: 5
	},
	{
		id: 2,
		name: 'Peppermint mocha starbucks coffee',
		slug: 'peppermint-mocha-starbucks-coffee',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, officiis.',
		price: 8,
		reviews: [],
		images: [prod2, prod3, prod4],
		date: '2022-12-21',
		rating: 4
	},
	{
		id: 3,
		name: 'Matcha creme frappuccino coffee',
		slug: 'matcha-creme-frappuccino-coffee',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, officiis.',
		price: 7,
		reviews: [],
		images: [prod3, prod4, prod5],
		date: '2022-12-22',
		rating: 5
	},
	{
		id: 4,
		name: 'Irish Cream Cold Brew adipisicing',
		slug: 'irish-cream-cold-brew-adipisicing',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, officiis.',
		price: 12,
		reviews: [],
		images: [prod4, prod5, prod6],
		date: '2022-12-23',
		rating: 4
	},
	{
		id: 5,
		name: 'Caramel Brulée Crème frappuccino',
		slug: 'caramel-brulée-crème-frappuccino',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, officiis.',
		price: 11,
		reviews: [],
		images: [prod5, prod6, prod1],
		date: '2022-12-24',
		rating: 5
	},
	{
		id: 6,
		name: 'Fruit Starbucks Refreshers frappuccino',
		slug: 'fruit-starbucks-refreshers-frappuccino',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, officiis.',
		price: 13,
		reviews: [],
		images: [prod6, prod1, prod2],
		date: '2022-12-25',
		rating: 4
	},
	{
		id: 7,
		name: 'Vanilla latte swirl frappuccino',
		slug: 'vanilla-latte-swirl-frappuccino',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, officiis.',
		price: 15,
		reviews: [],
		images: [prod7, prod4, prod5],
		date: '2022-12-26',
		rating: 5
	},
	{
		id: 8,
		name: 'Salted caramel smoothie blend',
		slug: 'salted-caramel-smoothie-blend',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, officiis.',
		price: 17,
		reviews: [],
		images: [prod8, prod4, prod5],
		date: '2022-12-27',
		rating: 4
	}
];
