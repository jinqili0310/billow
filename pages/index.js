/*
 * @Author: Jinqi Li
 * @Date: 1985-10-26 01:15:00
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-28 11:47:42
 * @FilePath: /billow-website/pages/index.js
 */
import React, { useState, useContext, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import 'antd/dist/antd.css';
import { Avatar, Image, Button } from 'antd';
import styles from '../styles/Home.module.css';
import PageHeader from '../components/pageHeader';
import HomeCarousel from '../components/homeCarousel';
import HomeArea from '../components/homeArea';
import PageFooter from '../components/pageFooter';
import { Row, Col, Card } from 'antd';
import SizeContext from 'antd/lib/config-provider/SizeContext';
import PostList from '../components/postList';
import fetch from 'isomorphic-unfetch';
import { server } from '../config';

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

const Home = ({ posts }) => {
	const size = useWindowSize();

	return (
		<React.Fragment>
			<Head>
				<title>Billow</title>
				<link rel="icon" href="/logo.ico" />
				<link rel="preload" href="/Futura-Condensed-Extra-Bold.otf" as="font" crossOrigin="" />
			</Head>
			<PageHeader />
			<HomeCarousel></HomeCarousel>
			<Button className="join-btn">JOIN US</Button>
			{/* <div className="banner-div">
				<Button className="join-btn">JOIN US</Button>
			</div> */}
			{/* <Button /> */}
			<main className={styles.container}>
				{/* placeholders start */}
				{size.width <= 800 ? (
					<Row className="home-row-small">
						<Col className="home-ant-card" span={24}>
							<HomeArea title="美食" link="/food" cover={<Image src="/food1.jpg" />} />
						</Col>
						<Col className="small-text" span={24}>
							<a href="/food">
								<h3 className="area-title">FOOD</h3>
							</a>
							<span className="hashtag">#Chinese</span>
							<span className="hashtag">#Japanese</span>
							<span className="hashtag">#Korean</span>
						</Col>
						<Col className="home-ant-card" span={24}>
							<HomeArea title="美股" link="/investment" cover={<Image src="/invest1.jpg" />} />
						</Col>
						<Col className="small-text" span={24}>
							<a href="/investment">
								<h3 className="area-title">INVESTMENT</h3>
							</a>
							<span className="hashtag">#Stock</span>
							<span className="hashtag">#Bitcoin</span>
						</Col>
						<Col className="home-ant-card" span={24}>
							<HomeArea title="读书/职场" link="/career" cover={<Image src="/growth1.jpg" />} />
						</Col>
						<Col className="small-text" span={24}>
							<a href="/career">
								<h3 className="area-title">CAREER</h3>
							</a>
							<span className="hashtag">#Reading</span>
							<span className="hashtag">#CareerCoach</span>
							<span className="hashtag">#FANG</span>
						</Col>
						<Col className="home-ant-card" span={24}>
							<HomeArea title="户外" link="/outdoor" cover={<Image src="/outdoor1.jpg" />} />
						</Col>
						<Col className="small-text" span={24}>
							<a href="/outdoor">
								<h3 className="area-title">OUTDOOR</h3>
							</a>
							<span className="hashtag">#Hiking</span>
							<span className="hashtag">#Camping</span>
							<span className="hashtag">#Beach</span>
							<span className="hashtag">#Wanderlust</span>
						</Col>
						<Col className="home-ant-card" span={24}>
							<HomeArea title="摄影" link="/photography" cover={<Image src="/photography1.jpg" />} />
						</Col>
						<Col className="small-text" span={24}>
							<a href="/photography">
								<h3 className="area-title">PHOTOGRAPHY</h3>
							</a>
							<span className="hashtag">#PhotoOfDay</span>
							<span className="hashtag">#Nature</span>
						</Col>
						<Col className="home-ant-card" span={24}>
							<HomeArea title="戏精才艺展示" link="/talentShow" cover={<Image src="/show1.jpg" />} />
						</Col>
						<Col className="small-text" span={24}>
							<a href="/talentShow">
								<h3 className="area-title">TALENT SHOW</h3>
							</a>
							<span className="hashtag">#KPop</span>
							<span className="hashtag">#HipHop</span>
							<span className="hashtag">#Band</span>
							<span className="hashtag">#BBoy</span>
						</Col>
					</Row>
				) : (
					<Row className="large-row">
						<Col className="large-col large-parent" span={12}>
							<HomeArea title="美食" link="/food" cover={<Image src="/food1.jpg" />} />
						</Col>
						<Col className="large-col large-parent" span={12}>
							<HomeArea title="美股" link="/investment" cover={<Image src="/invest1.jpg" />} />
						</Col>
						<Col className="large-text" span={12}>
							<a href="/food">
								<h3 className="area-title">FOOD</h3>
							</a>
							<span className="hashtag">#Chinese</span>
							<span className="hashtag">#Japanese</span>
							<span className="hashtag">#Korean</span>
						</Col>
						<Col className="large-text" span={12}>
							<a href="/investment">
								<h3 className="area-title">INVESTMENT</h3>
							</a>
							<span className="hashtag">#Stock</span>
							<span className="hashtag">#Bitcoin</span>
						</Col>

						<Col className="large-col large-parent" span={12}>
							<HomeArea title="读书/职场" link="/career" cover={<Image src="/growth1.jpg" />} />
						</Col>
						<Col className="large-col large-parent" span={12}>
							<HomeArea title="户外" link="/outdoor" cover={<Image src="/outdoor1.jpg" />} />
						</Col>
						<Col className="large-text" span={12}>
							<a href="/career">
								<h3 className="area-title">CAREER</h3>
							</a>
							<span className="hashtag">#Reading</span>
							<span className="hashtag">#CareerCoach</span>
							<span className="hashtag">#FANG</span>
						</Col>
						<Col className="large-text" span={12}>
							<a href="/outdoor">
								<h3 className="area-title">OUTDOOR</h3>
							</a>
							<span className="hashtag">#Hiking</span>
							<span className="hashtag">#Camping</span>
							<span className="hashtag">#Beach</span>
							<span className="hashtag">#Wanderlust</span>
						</Col>

						<Col className="large-col large-parent" span={12}>
							<HomeArea title="摄影" link="/photography" cover={<Image src="/photography1.jpg" />} />
						</Col>
						<Col className="large-col large-parent" span={12}>
							<HomeArea title="戏精才艺展示" link="/talentShow" cover={<Image src="/show1.jpg" />} />
						</Col>
						<Col className="large-text" span={12}>
							<a href="/photography">
								<h3 className="area-title">PHOTOGRAPHY</h3>
							</a>
							<span className="hashtag">#PhotoOfDay</span>
							<span className="hashtag">#Nature</span>
						</Col>
						<Col className="large-text" span={12}>
							<a href="/talentShow">
								<h3 className="area-title">TALENT SHOW</h3>
							</a>
							<span className="hashtag">#KPop</span>
							<span className="hashtag">#HipHop</span>
							<span className="hashtag">#Band</span>
							<span className="hashtag">#BBoy</span>
						</Col>
					</Row>
				)}
				{/* placeholders end */}

				<div className="update-module">
					<h2 className="area-title">UPDATES</h2>
					<div className="fetch-post">
						{posts.map((post) => {
							return (
								<div key={post._id}>
									<a href={`../${post._id}`}>
										<Card style={{ marginTop: 6 }} type="inner" title={post.title}>
											{post.discription}
										</Card>
									</a>
								</div>
							);
						})}
					</div>
				</div>
			</main>
			<footer>
				<PageFooter />
			</footer>
		</React.Fragment>
	);
};
Home.getInitialProps = async () => {
	const res = await fetch(`${server}/api/posts`);
	const { data } = await res.json();
	return { posts: data };
};

export default Home;
