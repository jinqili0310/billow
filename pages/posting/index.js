/*
 * @Author: Jinqi Li
 * @Date: 2021-03-02 08:27:43
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-03-02 16:02:37
 * @FilePath: \billow\pages\posting\index.js
 */
import 'antd/dist/antd.css';
import 'react-quill/dist/quill.snow.css';
import React, { useState, useEffect, useRef } from 'react';
import { Form, Input, Button, Select } from 'antd';
import { useCurrentUser } from '../../hooks/index';

const EmptyComponent = () => false;

const modules = {
	toolbar: [
		[ { header: [ 1, 2, 3, 4, false ] } ],
		[ 'bold', 'italic', 'underline', 'strike', 'blockquote' ],
		[ { color: [] }, { background: [] } ],
		[ { align: [] }, { list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' } ],
		[ 'link', 'image', 'video', 'code', 'code-block' ],
		[ 'clean' ]
	]
};

const formats = [
	'header',
	'bold',
	'italic',
	'underline',
	'strike',
	'blockquote',
	'list',
	'bullet',
	'indent',
	'link',
	'image',
	'color',
	'background',
	'align',
	'code',
	'code-block'
];

const NextQuill = (props) => {
	const [ quill, setQuill ] = useState(<EmptyComponent />);

	useEffect(() => {
		const ReactQuill = typeof window === 'object' ? require('react-quill') : <EmptyComponent />;
		setQuill(<ReactQuill {...props} />);
	}, []);

	return quill;
};

const PostingSection = () => {
	const [ user, { mutate } ] = useCurrentUser();
	const [ isUpdating, setIsUpdating ] = useState(false);
	const [ msg, setMsg ] = useState({ message: '', isError: false });
	const imagesRef = useRef();
	const topicRef = useRef();
	const titleRef = useRef();
	const contentRef = useRef();

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (isUpdating) return;
		setIsUpdating(true);
		const formData = new FormData();
		if (imagesRef.current.files[0]) {
			for (let i = 0; i < imagesRef.current.files.length; i++)
				formData.append(`imagesUpload${i}`, profilePictureRef.current.files[i]);
		}
		formData.append('topic', topicRef.current.value);
		formData.append('title', titleRef.current.value);
		formData.append('content', contentRef.current.value);
		console.log(formData);
		const res = await fetch('/api/post', {
			method: 'PATCH',
			body: formData
		});
		if (res.status === 200) {
			const postData = await res.json();
			// mutate({
			// 	user: {
			// 		...user,
			// 		...userData.user
			// 	}
			// });
			setMsg({ message: 'Post updated' });
		} else {
			setMsg({ message: await res.text(), isError: true });
		}
		setIsUpdating(false);
	};

	return (
		<div className="post-container">
			<form className="post-form" onSubmit={handleSubmit}>
				<label>Author: {user.username}</label>
				<label htmlFor="topic">
					Topic
					<select required id="topic" name="topic" ref={topicRef}>
						<option value="">--Please select a topic--</option>
						<option value="food">Food</option>
						<option value="investment">Investment</option>
						<option value="career">Career</option>
						<option value="outdoor">Outdoor</option>
						<option value="photography">Photography</option>
						<option value="talentShow">Talent Show</option>
					</select>
				</label>
				<label htmlFor="title">
					Title
					<input
						required
						id="title"
						name="title"
						type="text"
						placeholder="Please enter a title"
						ref={titleRef}
					/>
				</label>
				<label htmlFor="content">
					Content
					<NextQuill
						style={{ height: '500px' }}
						modules={modules}
						formats={formats}
						onChange={(value) => console.log(value)}
						id="content"
						name="content"
						type="text"
						placeholder="Please enter contents"
						ref={contentRef}
					/>
				</label>

				<div style={{ margin: '80px' }}>
					<button disabled={isUpdating} type="submit">
						Post
					</button>
					<button
						type="button"
						onClick={(e) => {
							e.preventDefault();
							window.location.href = '../';
						}}
					>
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
};

const PostingPage = () => {
	const [ user ] = useCurrentUser();

	if (!user) {
		return <p>Please sign in</p>;
	}
	return (
		<React.Fragment>
			<h1>Posting</h1>
			<PostingSection />
		</React.Fragment>
	);
};

export default PostingPage;
