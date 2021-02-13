/*
 * @Author: Jinqi Li
 * @Date: 2021-02-04 01:10:51
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-13 11:04:56
 * @FilePath: /billow-website/pages/food/index.js
 */
import React from 'react';
import Head from 'next/head';
import 'antd/dist/antd.css';
import PageHeader from '../../components/pageHeader';
import AreaIntro from '../../components/areaIntro';
import Meishi from '../../public/meishi.svg';
import PostList from '../../components/postList';
import fetch from 'isomorphic-unfetch';
import { server } from '../../config';
import { Card } from 'antd';

const Food = ({ posts }) => {
	return (
		<React.Fragment>
			<Head>
				<title>Billow</title>
				<link rel="icon" href="/logo.ico" />
			</Head>
			<PageHeader />
			<AreaIntro icon={Meishi} title="美食" />
			
			<div className="fetch-post">
				{posts.filter(post => post.tag === "food")
				.map((post) => {
					return (
						<div key={post._id}>
							<a href={`../${post._id}`}>
								<Card
									style={{ marginTop: 6 }}
									type="inner"
									title={post.title}
								>
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

Food.getInitialProps = async () => {
	const res = await fetch(`${server}/api/posts`);
	const { data } = await res.json();
	return { posts: data };
};

export default Food;
