/*
 * @Author: Jinqi Li
 * @Date: 2021-03-04 08:29:07
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-03-04 15:09:48
 * @FilePath: \billow\components\comments.js
 */
import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Comment, Avatar, Form, Button, List, Input, message } from 'antd';
import moment from 'moment';
import { useCurrentUser } from '../hooks/index';

const { TextArea } = Input;

const CommentList = ({ comments }) =>
	comments ? (
		<List
			dataSource={comments}
			header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
			itemLayout="horizontal"
			renderItem={(props) => <Comment {...props} />}
		/>
	) : (<p>Be the first to reply!</p>);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
	<React.Fragment>
		<Form.Item>
			<TextArea rows={4} onChange={onChange} value={value} />
		</Form.Item>
		<Form.Item>
			<Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
				Add Comment
			</Button>
		</Form.Item>
	</React.Fragment>
);

const Comments = ({ post }) => {
	const [ user ] = useCurrentUser();
	const [ comments, setComments ] = useState(post.comments || []);
	const [ submitting, setSubmitting ] = useState(false);
	const [ value, setValue ] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!value) return;

		setSubmitting(true);
		setComments([
			...comments,
			{
				author: user.username,
				avatar: user.profilePicture,
				content: value,
				datetime: moment().fromNow()
			}
		]);

		const body = {
			comments: comments
		};

		const res = await fetch(`/api/posts/${post._id}`, {
			method: 'PUT',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		});
		if (res.status === 200) {
            console.log(body, res.json())
			message.success('Comment success!');
			setValue('');
			setSubmitting(false);
		} else {
			console.log(await res.text());
			message.error('Comment failed.');
			setSubmitting(false);
		}
	};

	const handleChange = (e) => {
		e.preventDefault();
		setValue(e.target.value);
	};

	if (!user) return <p>Please login</p>;
	return (
		<React.Fragment>
			{comments.length > 0 && <CommentList comments={comments} />}
			<Comment
				avatar={<Avatar src={user.profilePicture} alt={user.username} />}
				content={
					<Editor onChange={handleChange} onSubmit={handleSubmit} submitting={submitting} value={value} />
				}
			/>
		</React.Fragment>
	);
};

export default Comments;
