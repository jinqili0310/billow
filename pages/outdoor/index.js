/*
 * @Author: Jinqi Li
 * @Date: 2021-02-04 01:11:25
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-13 11:04:38
 * @FilePath: /billow-website/pages/outdoor/index.js
 */
import React from 'react';
import Head from 'next/head';
import 'antd/dist/antd.css';
import PageHeader from '../../components/pageHeader';
import AreaIntro from '../../components/areaIntro';
import Huwai from '../../public/huwai.svg';
import PostList from '../../components/postList';
import fetch from 'isomorphic-unfetch';
import { server } from '../../config';
import { Card } from 'antd';

const Outdoor =({posts})=> {
	return (
		<React.Fragment>
			<PageHeader />
			<AreaIntro icon={Huwai} title="户外" />
			
			<div className="fetch-post">
				{posts.filter(post => post.tag === "outdoor")
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

Outdoor.getInitialProps = async () => {
	const res = await fetch(`${server}/api/posts`);
	const { data } = await res.json();
	return { posts: data };
};

export default Outdoor;
