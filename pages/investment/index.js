/*
 * @Author: Jinqi Li
 * @Date: 2021-02-04 01:11:11
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-13 16:27:36
 * @FilePath: /billow-website/pages/investment/index.js
 */
import React from 'react';
import Head from 'next/head';
import 'antd/dist/antd.css';
import PageHeader from '../../components/pageHeader';
import AreaIntro from '../../components/areaIntro';
import Meigu from '../../public/meigu.svg';
import PostList from '../../components/postList';
import fetch from 'isomorphic-unfetch';
import { server } from '../../config';
import { Card } from 'antd';

const Investment = ({ posts }) => {
	return (
		<React.Fragment>
			<PageHeader />
			<AreaIntro icon={Meigu} title="美股" />

			<div className="fetch-post">
				{posts.filter((post) => post.tag === 'investment').map((post) => {
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

Investment.getInitialProps = async () => {
	const res = await fetch(`${server}/api/posts`);
	const { data } = await res.json();
	return { posts: data };
};

export default Investment;
