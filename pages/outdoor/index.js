/*
 * @Author: Jinqi Li
 * @Date: 2021-02-04 01:11:25
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-05 11:58:19
 * @FilePath: \billow\pages\outdoor\index.js
 */
import React from 'react';
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
		<div>
			<PageHeader />
			<AreaIntro icon={Huwai} title="户外" />
			
			<div className="fetch-post">
				{posts.filter(post => post.tag === "outdoor")
				.map((post) => {
					return (
						<div key={post._id}>
							<a href={`../api/posts/${post._id}`}>
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

		</div>
	);
}

Outdoor.getInitialProps = async () => {
	const res = await fetch(`${server}/api/posts`);
	const { data } = await res.json();
	return { posts: data };
};

export default Outdoor;
