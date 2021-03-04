/*
 * @Author: Jinqi Li
 * @Date: 2021-02-04 13:23:56
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-03-04 08:06:51
 * @FilePath: \billow\pages\_app.js
 */
import Head from 'next/head';
import React from 'react';
import '../styles/globals.css';
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }) {
	return (
		<React.Fragment>
			<Head>
				<title>MicroBillow</title>
				<link rel="icon" href="/logo.ico" />
				<meta name="description" content="Work Hard, Play Harder. 西雅图浪群"></meta>
				<link rel="preload" href="/Futura-Condensed-Extra-Bold.otf" as="font" crossOrigin="" />
			</Head>
			<Component {...pageProps} />
		</React.Fragment>
	);
}

export default MyApp;
