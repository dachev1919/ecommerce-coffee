export interface IProduct {
	id: number;
	name: string;
	slug: string;
	description: string;
	price: number;
	reviews: [];
	images: string[];
	date: string;
	rating: number;
}

export interface IProductDetails {
	product: IProduct;
}
