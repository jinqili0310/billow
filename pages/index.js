/*
 * @Author: Jinqi Li
 * @Date: 1985-10-26 01:15:00
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-05 02:34:19
 * @FilePath: /billow-website/pages/index.js
 */
import React from 'react';
import 'antd/dist/antd.css';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import PageHeader from '../components/pageHeader';
import HomeCarousel from '../components/homeCarousel';
import HomeArea from '../components/homeArea';
import { Avatar, Image } from 'antd';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Billow</title>
				<link rel="icon" href="/billow.ico" />
			</Head>
			<PageHeader />
			<main className={styles.container}>
				<HomeCarousel />
				{/* placeholders start */}
				<HomeArea
					title="美食"
					link="/food"
					cover={<Image src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
					avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
					cardTitle="美食 card"
					cardDescription="This is the description"
				/>
				<HomeArea
					title="美股"
					link="invest"
					cover={<Image src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
					avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
					cardTitle="美股 card"
					cardDescription="This is the description"
				/>
				<HomeArea
					title="读书/职场"
					link="growth"
					cover={<Image src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
					avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
					cardTitle="读书/职场 card"
					cardDescription="This is the description"
				/>
				<HomeArea
					title="户外"
					link="/outdoor"
					cover={<Image src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
					avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
					cardTitle="户外 card"
					cardDescription="This is the description"
				/>
				<HomeArea
					title="摄影"
					link="/photography"
					cover={<Image src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
					avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
					cardTitle="摄影 card"
					cardDescription="This is the description"
				/>
				<HomeArea
					title="戏精才艺展示"
					link="show"
					cover={<Image src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
					avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
					cardTitle="戏精才艺展示 card"
					cardDescription="This is the description"
				/>
				{/* placeholders end */}
			</main>
			<footer className={styles.footer} />
		</div>
	);
}
