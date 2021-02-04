/*
 * @Author: Jinqi Li
 * @Date: 1985-10-26 01:15:00
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-04 01:32:52
 * @FilePath: /billow-website/styles/Home.module.css
 */
import React from 'react';
import 'antd/dist/antd.css';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import PageHeader from '../components/pageHeader';
import HomeCarousel from '../components/homeCarousel';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Billow</title>
				<link rel="icon" href="/billow.ico" />
			</Head>
			<main className={styles.container}>
				<PageHeader />
				<HomeCarousel />
			</main>
			<footer className={styles.footer} />
		</div>
	);
}
