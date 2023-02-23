import React, { FC } from 'react';
import {
	Button,
	ChakraProvider,
	extendTheme,
	Menu,
	MenuButton,
	MenuItem,
	MenuList
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

export enum EnumSorting {
	LOW_TO_HIGH_PRICE = 'LOW_TO_HIGH_PRICE',
	HIGH_TO_LOW_PRICE = 'HIGH_TO_LOW_PRICE',
	NEWEST = 'NEWEST',
	OLDEST = 'OLDEST'
}

interface ISortingItem {
	label: 'Price: high to low' | 'Price: low to high' | 'Newest' | 'Oldest';
	value: EnumSorting;
}

const sortingData: ISortingItem[] = [
	{
		label: 'Newest',
		value: EnumSorting.NEWEST
	},
	{
		label: 'Oldest',
		value: EnumSorting.OLDEST
	},
	{
		label: 'Price: low to high',
		value: EnumSorting.LOW_TO_HIGH_PRICE
	},
	{
		label: 'Price: high to low',
		value: EnumSorting.HIGH_TO_LOW_PRICE
	}
];

const relatedProductsColors = extendTheme({
	text: '#a49b8f',
	colors: {
		brand: {
			500: '#E8E7E3'
		}
	}
});

const Filtering: FC = () => {
	return (
		<Menu>
			<ChakraProvider theme={relatedProductsColors}>
				<MenuButton
					as={Button}
					color={relatedProductsColors.text}
					colorScheme='brand'
					rightIcon={<ChevronDownIcon />}
				>
					Actions
				</MenuButton>
				<MenuList>
					{sortingData.map(sort => (
						<MenuItem key={sort.value}>{sort.label}</MenuItem>
					))}
				</MenuList>
			</ChakraProvider>
		</Menu>
	);
};

export default Filtering;
