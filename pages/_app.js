/*
 * @Author: Jinqi Li
 * @Date: 2021-02-04 13:23:56
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-20 21:01:11
 * @FilePath: /billow-website/pages/_app.js
 */
import Head from 'next/head';
import React from 'react';
import '../styles/globals.css';
import { UserProvider } from '@auth0/nextjs-auth0';

function MyApp({ Component, pageProps }) {
	return (
		<UserProvider>
			<Head>
				<title>Billow</title>
				<link rel="icon" href="/logo.ico" />
				<meta name="description" content="Work Hard, Play Harder. 西雅图浪群"></meta>
			</Head>
			<Component {...pageProps} />
		</UserProvider>
	);
}

export default MyApp;
