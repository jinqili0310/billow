/*
 * @Author: Jinqi Li
 * @Date: 2021-02-13 02:54:09
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-13 14:52:41
 * @FilePath: /billow-website/pages/[id]/index.js
 */
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import { useRouter } from 'next/router';
import { server } from '../../config';
import 'antd/dist/antd.css';
import { Card, Avatar, Comment, Tooltip, List, Input, Form, Button } from 'antd';
import { ShareAltOutlined, EllipsisOutlined, CommentOutlined } from '@ant-design/icons';
import moment from 'moment';
import reqwest from 'reqwest';
import PageHeader from '../../components/pageHeader';

const { Meta } = Card;
const { TextArea } = Input;

const Post = ({ post }) => {
	return (
		<React.Fragment>
			<Head>
				<title>Billow</title>
				<link rel="icon" href="/logo.ico" />
			</Head>
			<PageHeader />
			<div className="post-content">
				<Card
				// actions={[
				// 	<CommentOutlined key="comment" />,
				// 	<ShareAltOutlined key="share" />,
				// 	<EllipsisOutlined key="ellipsis" />
				// ]}
				>
					<Meta title={post.title} description={post.username} />
				</Card>
				<Card>
					{post.images.map((item) => {
						return (
							<img
								key={item.public_id}
								style={{ margin: '0 auto 1em auto', display: 'block' }}
								width={200}
								alt="post image"
								src={item.url}
							/>
						);
					})}
					<div dangerouslySetInnerHTML={{ __html: post.body }} />
				</Card>
			</div>
		</React.Fragment>
	);
};

Post.getInitialProps = async ({ query: { id } }) => {
	const res = await fetch(`${server}/api/posts/${id}`);
	const { data } = await res.json();

	return { post: data };
};

export default Post;
