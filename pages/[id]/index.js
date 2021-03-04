/*
 * @Author: Jinqi Li
 * @Date: 2021-03-02 19:54:17
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-03-04 08:44:53
 * @FilePath: \billow\pages\[id]\index.js
 */
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import { useRouter } from 'next/router';
import { server } from '../../config';
import 'antd/dist/antd.css';
import { Card, Avatar, Comment, Tooltip, List, Input, Form, Button } from 'antd';
import { ShareAltOutlined, EllipsisOutlined, CommentOutlined } from '@ant-design/icons';
import PageHeader from '../../components/pageHeader';
import Comments from '../../components/comments';

const { Meta } = Card;
const { TextArea } = Input;

const PostId = ({ post }) => {
	return (
		<React.Fragment>
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
				<Card className="post-text">
					{post.images.map((item) => {
						return <img className="db-img" key={item.public_id} alt="billow" src={item.url} />;
					})}
					{post.body ? (
						<div dangerouslySetInnerHTML={{ __html: post.body }} />
					) : (
						<div dangerouslySetInnerHTML={{ __html: post.content }} />
					)}
				</Card>
				<Card>
					<Comments post={post}></Comments>
				</Card>
			</div>
		</React.Fragment>
	);
};

PostId.getInitialProps = async ({ query: { id } }) => {
	const res = await fetch(`${server}/api/posts/${id}`);
	const { data } = await res.json();
	return { post: data };
};

export default PostId;
