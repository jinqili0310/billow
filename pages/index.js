/*
 * @Author: Jinqi Li
 * @Date: 1985-10-26 01:15:00
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-23 00:05:55
 * @FilePath: /billow-website/pages/index.js
 */
import React, { useState, useContext, useEffect } from 'react';
import Head from 'next/head';
import 'antd/dist/antd.css';
import { Avatar, Image, Button } from 'antd';
import styles from '../styles/Home.module.css';
import PageHeader from '../components/pageHeader';
import HomeCarousel from '../components/homeCarousel';
import HomeArea from '../components/homeArea';
import PageFooter from '../components/pageFooter';
import { Row, Col } from 'antd';
import SizeContext from 'antd/lib/config-provider/SizeContext';

function useWindowSize() {
	const [ windowSize, setWindowSize ] = useState({
		width: undefined,
		height: undefined
	});

	useEffect(() => {
		if (typeof window !== 'undefined') {
			function handleResize() {
				setWindowSize({
					width: window.innerWidth,
					height: window.innerHeight
				});
			}

			window.addEventListener('resize', handleResize);

			handleResize();

			return () => window.removeEventListener('resize', handleResize);
		}
	}, []);
	return windowSize;
}

export default function Home() {
	const size = useWindowSize();

	return (
		<React.Fragment>
			<PageHeader />
			<div className="banner-div">
				<Button className="join-btn">JOIN US</Button>
				<Image className="banner-img" src="/banner.png" preview={false} />
			</div>
			<Button />
			<main className={styles.container}>
				{/* placeholders start */}
				{size.width <= 800 ? (
					<Row className="home-row-small">
						<Col className="home-ant-card" span={24}>
							<HomeArea title="美食" link="/food" cover={<Image src="/food0.jpg" />} />
						</Col>
						<Col className="small-text" span={24}>
							<h3>FOOD</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
							</p>
						</Col>
						<Col className="home-ant-card" span={24}>
							<HomeArea title="美股" link="/investment" cover={<Image src="/invest0.jpg" />} />
						</Col>
						<Col className="small-text" span={24}>
							<h3>INVESTMENT</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
							</p>
						</Col>
						<Col className="home-ant-card" span={24}>
							<HomeArea title="读书/职场" link="/career" cover={<Image src="/growth0.jpg" />} />
						</Col>
						<Col className="small-text" span={24}>
							<h3>CAREER</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
							</p>
						</Col>
						<Col className="home-ant-card" span={24}>
							<HomeArea title="户外" link="/outdoor" cover={<Image src="/outdoor0.jpg" />} />
						</Col>
						<Col className="small-text" span={24}>
							<h3>OUTDOOR</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
							</p>
						</Col>
						<Col className="home-ant-card" span={24}>
							<HomeArea title="摄影" link="/photography" cover={<Image src="/photography0.jpg" />} />
						</Col>
						<Col className="small-text" span={24}>
							<h3>PHOTOGRAPHY</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
							</p>
						</Col>
						<Col className="home-ant-card" span={24}>
							<HomeArea title="戏精才艺展示" link="/talentShow" cover={<Image src="/show0.jpg" />} />
						</Col>
						<Col className="small-text" span={24}>
							<h3>TALENT SHOW</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
							</p>
						</Col>
					</Row>
				) : (
					<Row className="large-row">
						<Col className="large-col large-parent" span={12}>
							<HomeArea
								title="美食"
								link="/food"
								cover={<Image src="/food0.jpg" />}
							/>
						</Col>
						<Col className="large-text" span={12}>
							<h3>FOOD</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
								dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
								Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
								mollit anim id est laborum.
							</p>
						</Col>
						<Col className="large-text-even" span={12}>
							<h3>INVESTMENT</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
								dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
								Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
								mollit anim id est laborum.
							</p>
						</Col>
						<Col className="large-col-even large-parent" span={12}>
							<HomeArea
								title="美股"
								link="/investment"
								cover={<Image src="/invest0.jpg" />}
							/>
						</Col>
						<Col className="large-col large-parent" span={12}>
							<HomeArea
								title="读书/职场"
								link="/career"
								cover={<Image src="/growth0.jpg" />}
							/>
						</Col>
						<Col className="large-text" span={12}>
							<h3>CAREER</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
								dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
								Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
								mollit anim id est laborum.
							</p>
						</Col>
						<Col className="large-text-even" span={12}>
							<h3>OUTDOOR</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
								dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
								Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
								mollit anim id est laborum.
							</p>
						</Col>
						<Col className="large-col-even large-parent" span={12}>
							<HomeArea
								title="户外"
								link="/outdoor"
								cover={<Image src="/outdoor0.jpg" />}
							/>
						</Col>
						<Col className="large-col large-parent" span={12}>
							<HomeArea
								title="摄影"
								link="/photography"
								cover={<Image src="/photography0.jpg" />}
							/>
						</Col>
						<Col className="large-text" span={12}>
							<h3>PHOTOGRAPHY</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
								dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
								Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
								mollit anim id est laborum.
							</p>
						</Col>
						<Col className="large-text-even" span={12}>
							<h3>TALENT SHOW</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
								dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
								Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
								mollit anim id est laborum.
							</p>
						</Col>
						<Col className="large-col-even large-parent" span={12}>
							<HomeArea
								title="戏精才艺展示"
								link="/talentShow"
								cover={<Image src="/show0.jpg" />}
							/>
						</Col>
						
					</Row>
				)}
				{/* placeholders end */}
				<HomeCarousel />
			</main>
			<footer>
				<PageFooter />
			</footer>
		</React.Fragment>
	);
}
