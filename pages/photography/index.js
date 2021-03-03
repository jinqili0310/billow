/*
 * @Author: Jinqi Li
 * @Date: 2021-02-04 15:18:15
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-13 10:44:19
 * @FilePath: /billow-website/pages/photography/index.js
 */
import React from 'react';
import Head from 'next/head';
import 'antd/dist/antd.css';
import PageHeader from '../../components/pageHeader';
import AreaIntro from '../../components/areaIntro';
import PostList from '../../components/postList';
import Sheying from '../../public/sheying.svg';
import fetch from 'isomorphic-unfetch';
import { server } from '../../config';
import { Card } from 'antd';

const Photography = ({posts})=> {
	return (
		<React.Fragment>
			<PageHeader />
			<AreaIntro icon={Sheying} title="摄影" />
			
			<div className="fetch-post">
				{posts.filter(post => post.tag === "photography")
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
}

Photography.getInitialProps = async () => {
	const res = await fetch(`${server}/api/posts`);
	const { data } = await res.json();
	return { posts: data };
};

export default Photography;