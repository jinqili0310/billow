/*
 * @Author: Jinqi Li
 * @Date: 2021-02-13 02:54:09
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-28 16:17:45
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
import PageHeader from '../../components/pageHeader';
import Posts from '../../components/posts'

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
				<Posts></Posts>
				{/* <Card
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
					<div dangerouslySetInnerHTML={{ __html: post.body }} />
				</Card> */}
			</div>
		</React.Fragment>
	);
};

export default Post;
