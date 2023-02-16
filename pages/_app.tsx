import type { AppProps } from 'next/app';
import '@/common/styles/globals.scss';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { store } from '../src/store/store';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<ChakraProvider>
				<Component {...pageProps} />
			</ChakraProvider>
		</Provider>
	);
}
