/*
 * @Author: Jinqi Li
 * @Date: 2021-02-04 01:12:07
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-13 16:27:46
 * @FilePath: /billow-website/pages/career/index.js
 */
import React from 'react';
import Head from 'next/head';
import 'antd/dist/antd.css';
import PageHeader from '../../components/pageHeader';
import AreaIntro from '../../components/areaIntro';
import Dushu from '../../public/dushu.svg';
import PostList from '../../components/postList';
import fetch from 'isomorphic-unfetch';
import { server } from '../../config';
import { Card } from 'antd';

const Career = ({ posts }) => {
	return (
		<React.Fragment>
			<Head>
				<title>Billow</title>
				<link rel="icon" href="/logo.ico" />
			</Head>
			<PageHeader />
			<AreaIntro icon={Dushu} title="读书/职场" />

			<div className="fetch-post">
				{posts.filter((post) => post.tag === 'career').map((post) => {
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
		</React.Fragment>
	);
};

Career.getInitialProps = async () => {
	const res = await fetch(`${server}/api/posts`);
	const { data } = await res.json();
	return { posts: data };
};

export default Career;
