import type { AppProps } from 'next/app';

import '@/common/styles/globals.scss';
import HomePage from './index';

export default function App({ Component, pageProps }: AppProps) {
	return <HomePage />;
}
