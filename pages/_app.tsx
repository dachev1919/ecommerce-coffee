import type { AppProps } from 'next/app';
import '@/common/styles/globals.scss';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { persistor, store } from '@/store/store';
import { PersistGate } from 'redux-persist/integration/react';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<ChakraProvider>
					<Component {...pageProps} />
				</ChakraProvider>
			</PersistGate>
		</Provider>
	);
}
