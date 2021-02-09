/*
 * @Author: Jinqi Li
 * @Date: 1985-10-26 01:15:00
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-09 00:54:51
 * @FilePath: /billow-website/pages/index.js
 */
import React from 'react';
import Head from 'next/head';
import 'antd/dist/antd.css';
import { Avatar, Image } from 'antd';
import styles from '../styles/Home.module.css';
import PageHeader from '../components/pageHeader';
import HomeCarousel from '../components/homeCarousel';
import HomeArea from '../components/homeArea';
import PageFooter from '../components/pageFooter';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Billow</title>
				<link rel="icon" href="/logo.ico" />
			</Head>
			<PageHeader />
			<main className={styles.container}>
				<HomeCarousel />
				{/* placeholders start */}
				<HomeArea
					title="美食"
					link="/food"
					cover={<Image src='/food.jpg' />}
					avatar={<Avatar src='/logo1.png' />}
					cardTitle="美食 版块介绍"
					cardDescription="点击查看"
				/>
				<HomeArea
					title="美股"
					link="invest"
					cover={<Image src='/invest.jpg' />}
					avatar={<Avatar src='/logo1.png' />}
					cardTitle="美股 版块介绍"
					cardDescription="点击查看"
				/>
				<HomeArea
					title="读书/职场"
					link="growth"
					cover={<Image src='/growth.jpg' />}
					avatar={<Avatar src='/logo1.png' />}
					cardTitle="读书/职场 版块介绍"
					cardDescription="点击查看"
				/>
				<HomeArea
					title="户外"
					link="/outdoor"
					cover={<Image src='/outdoor.jpg' />}
					avatar={<Avatar src='/logo1.png' />}
					cardTitle="户外 版块介绍"
					cardDescription="点击查看"
				/>
				<HomeArea
					title="摄影"
					link="/photography"
					cover={<Image src='/photography.jpg' />}
					avatar={<Avatar src='/logo1.png' />}
					cardTitle="摄影 版块介绍"
					cardDescription="点击查看"
				/>
				<HomeArea
					title="戏精才艺展示"
					link="show"
					cover={<Image src='/show.jpg' />}
					avatar={<Avatar src='/logo1.png' />}
					cardTitle="戏精才艺展示 版块介绍"
					cardDescription="点击查看"
				/>
				{/* placeholders end */}
			</main>
			<footer>
				<PageFooter />
			</footer>
		</div>
	);
}
