import React, { FunctionComponent } from 'react';
import styles from './TrendingProducts.module.scss';
import { products } from '@/common/mock-data/produtcs.data';
import Image from 'next/image';
import { formatToCurrency } from '@/utils/format-to-currency';
import { StarIcon } from '@chakra-ui/icons';
import StarRatingComponent from 'react-star-rating-component';
import TrendingProductsActions from './trending-products-actions/TrendingProductsActions';
import Link from 'next/link';

interface ITrendingProductsProps {}

const TrendingProducts: FunctionComponent<ITrendingProductsProps> = () => {
	const mainProduct = products[0];
	const recommendedProducts = products.slice(1, 4);

	return (
		<section className={styles['trending-products']}>
			<div className={styles.info}>
				<Link href={`/ecommerce-coffee/product/${mainProduct.slug}`}>
					<p className={styles.title}>{mainProduct.name}</p>
				</Link>
				<div className={styles.rating}>
					<StarRatingComponent
						name='rate1'
						starCount={5}
						value={mainProduct.rating}
						editing={false}
					/>
					<p className={styles.price}>{formatToCurrency(mainProduct.price)}</p>
				</div>
				<p className={styles.description}>{mainProduct.description}</p>
				<TrendingProductsActions product={mainProduct} />
			</div>
			<div className={styles.image}>
				<Link href={`/ecommerce-coffee/product/${mainProduct.slug}`}>
					<Image
						src={mainProduct.images[0]}
						width={690}
						height={690}
						alt='main product'
					/>
				</Link>
			</div>
			<div className={styles.miniatures}>
				{recommendedProducts.map(({ id, images, rating, slug }, index) => (
					<div key={id} className={styles.miniature}>
						<Link href={`/ecommerce-coffee/product/${slug}`}>
							<Image
								src={images[0]}
								alt={`product ${index}`}
								width={150}
								height={150}
							/>
							<span className={styles.badge}>
								{rating.toFixed(1)}
								<StarIcon />
							</span>
						</Link>
					</div>
				))}
			</div>
		</section>
	);
};

export default TrendingProducts;
