import type { AppProps } from 'next/app';
import '@/common/styles/globals.scss';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { persistor, store } from '@/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<ToastContainer
				position='top-right'
				autoClose={1000}
				closeOnClick
				rtl={false}
				theme='light'
				draggable
				pauseOnHover={false}
			/>
			<PersistGate loading={null} persistor={persistor}>
				<ChakraProvider>
					<Component {...pageProps} />
				</ChakraProvider>
			</PersistGate>
		</Provider>
	);
}
