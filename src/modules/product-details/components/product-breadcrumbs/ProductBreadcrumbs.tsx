import React, { FC } from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import Link from 'next/link';
import { COLORS } from '@/config/color.config';

interface IProductBreadcrumbsProps {
	productTitle: string;
}

const ProductBreadcrumbs: FC<IProductBreadcrumbsProps> = ({ productTitle }) => {
	return (
		<Breadcrumb color={COLORS.beige} marginY={10}>
			<BreadcrumbItem>
				<BreadcrumbLink as={Link} href='/'>
					Home
				</BreadcrumbLink>
			</BreadcrumbItem>

			<BreadcrumbItem isCurrentPage>
				<BreadcrumbLink
					color={COLORS.black}
					userSelect='none'
					pointerEvents='none'
				>
					{productTitle}
				</BreadcrumbLink>
			</BreadcrumbItem>
		</Breadcrumb>
	);
};

export default ProductBreadcrumbs;
