/*
 * @Author: Jinqi Li
 * @Date: 2021-03-02 19:54:17
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-03-02 23:37:47
 * @FilePath: /billow-website/components/posts.js
 */
import React from 'react';
import Head from 'next/head';
import 'antd/dist/antd.css';
import fetch from 'isomorphic-unfetch';
import { server } from '../config';
import { Card } from 'antd';

const PostsComponent = ({ posts }) => {
	return (
		<div className="fetch-post">
			{/* {console.log(posts.filter(post => post.tag === "food"))} */}
			{/* {posts.map((post) => {
					return (
						<div key={post._id}>
							<a href={`../${post._id}`}>
								<Card style={{ marginTop: 6 }} type="inner" title={post.title}>
									{post.discription}
								</Card>
							</a>
						</div>
					);
				})} */}
		</div>
	);
};

PostsComponent.getInitialProps = async () => {
	const res = await fetch(`${server}/api/posts`);
	console.log(res.json());
	const { data } = await res.json();
	console.log(data);
	return { posts: data };
};

export default PostsComponent;
