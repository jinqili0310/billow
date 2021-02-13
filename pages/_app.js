/*
 * @Author: Jinqi Li
 * @Date: 2021-02-04 13:23:56
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-13 10:54:40
 * @FilePath: /billow-website/pages/_app.js
 */
import React from 'react';
import '../styles/globals.css';
import { DataProvider } from '../store/GlobalState';

function MyApp({ Component, pageProps }) {
	return (
		<DataProvider>
			<Component {...pageProps} />
		</DataProvider>
	);
}

export default MyApp;
