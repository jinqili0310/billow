/*
 * @Author: Jinqi Li
 * @Date: 1985-10-26 01:15:00
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-13 17:39:24
 * @FilePath: /billow-website/pages/index.js
 */
import React, { useState, useContext, useEffect } from 'react';
import Head from 'next/head';
import 'antd/dist/antd.css';
import { Avatar, Image } from 'antd';
import styles from '../styles/Home.module.css';
import PageHeader from '../components/pageHeader';
import HomeCarousel from '../components/homeCarousel';
import HomeArea from '../components/homeArea';
import PageFooter from '../components/pageFooter';
import { Row, Col } from 'antd';

export default function Home() {
	return (
		<React.Fragment>
			<Head>
				<title>Billow</title>
				<link rel="icon" href="/logo.ico" />
			</Head>
			<PageHeader />
			<main className={styles.container}>
				<HomeCarousel />
				{/* placeholders start */}
				<Row>
					<Col xs={24} sm={12} md={6} lg={4} xl={4}>
						<HomeArea
							title="美食"
							link="/food"
							cover={<Image src="/food.jpg" />}
							avatar={<Avatar src="/meishi0.png" />}
							cardTitle="美食版块"
							cardDescription="点击查看"
						/>
					</Col>
					<Col xs={24} sm={12} md={6} lg={4} xl={4}>
						<HomeArea
							title="美股"
							link="/investment"
							cover={<Image src="/invest.jpg" />}
							avatar={<Avatar src="/meigu0.png" />}
							cardTitle="美股版块"
							cardDescription="点击查看"
						/>
					</Col>
					<Col xs={24} sm={12} md={6} lg={4} xl={4}>
						<HomeArea
							title="读书/职场"
							link="/career"
							cover={<Image src="/growth.jpg" />}
							avatar={<Avatar src="/dushu0.png" />}
							cardTitle="读书/职场版块"
							cardDescription="点击查看"
						/>
					</Col>
					<Col xs={24} sm={12} md={6} lg={4} xl={4}>
						<HomeArea
							title="户外"
							link="/outdoor"
							cover={<Image src="/outdoor.jpg" />}
							avatar={<Avatar src="/huwai0.png" />}
							cardTitle="户外版块"
							cardDescription="点击查看"
						/>
					</Col>
					<Col xs={24} sm={12} md={6} lg={4} xl={4}>
						<HomeArea
							title="摄影"
							link="/photography"
							cover={<Image src="/photography.jpg" />}
							avatar={<Avatar src="/sheying0.png" />}
							cardTitle="摄影版块"
							cardDescription="点击查看"
						/>
					</Col>
					<Col xs={24} sm={12} md={6} lg={4} xl={4}>
						<HomeArea
							title="戏精才艺展示"
							link="/talentShow"
							cover={<Image src="/show.jpg" />}
							avatar={<Avatar src="/caiyi0.png" />}
							cardTitle="戏精才艺展示版块"
							cardDescription="点击查看"
						/>
					</Col>
				</Row>
				{/* placeholders end */}
			</main>
			<footer>
				<PageFooter />
			</footer>
		</React.Fragment>
	);
}
