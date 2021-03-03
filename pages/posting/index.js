/*
 * @Author: Jinqi Li
 * @Date: 2021-03-02 22:30:22
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-03-03 00:51:43
 * @FilePath: /billow-website/pages/posting/index.js
 */
import React, { useState, useEffect, useContext } from 'react';
import Head from 'next/head';
import 'antd/dist/antd.css';
import { CloudUploadOutlined, DeleteOutlined } from '@ant-design/icons';
import fetch from 'isomorphic-unfetch';
import { useRouter } from 'next/router';
import { server } from '../../config';
import PageHeader from '../../components/pageHeader';
import { Form, Loader } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { imageUpload } from '../../utils/imageUpload';
import { useCurrentUser } from '../../hooks/index';
import 'react-quill/dist/quill.snow.css';

const EmptyComponent = () => false;

const modules = {
	toolbar: [
		[ { header: [ 1, 2, 3, 4, false ] } ],
		[ 'bold', 'italic', 'underline', 'strike', 'blockquote' ],
		[ { color: [] }, { background: [] } ],
		[ { align: [] }, { list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' } ],
		[ 'link', 'code', 'code-block' ],
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

export default function Posting() {
	const [ user, { mutate } ] = useCurrentUser();
	const router = useRouter();

	const tagChildren = [
		{ key: 'food', text: 'Food', value: 'food' },
		{ key: 'investment', text: 'Investment', value: 'investment' },
		{ key: 'career', text: 'Career', value: 'career' },
		{ key: 'outdoor', text: 'Outdoor', value: 'outdoor' },
		{ key: 'photography', text: 'Photography', value: 'photography' },
		{ key: 'talentShow', text: 'Talent Show', value: 'talentShow' }
	];
	const [ form, setForm ] = useState({
		title: '',
		tag: '',
		description: '',
		images: [],
		content: '',
		username: '',
		userId: ''
	});
	const [ isSubmitting, setIsSubmitting ] = useState(false);
	const [ errors, setErrors ] = useState({});
	const [ images, setImages ] = useState([]);
	const [ editorState, setEditorState ] = useState(null);

	useEffect(
		() => {
			if (isSubmitting) {
				if (Object.keys(errors).length === 0) {
					createPost();
				} else {
					setIsSubmitting(false);
				}
			}
		},
		[ errors ]
	);
	const createPost = async () => {
		// try {
			console.log(JSON.stringify(form));
			const res = await fetch(`${server}/api/posts`, {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(form)
			});
			router.push('/');
		// } catch (error) {
		// 	console.log(error);
		// }
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		let errs = validate();
		setErrors(errs);

		let media = [];
		const imgNewURL = images.filter((img) => !img.url);
		const imgOldURL = images.filter((img) => img.url);
		if (imgNewURL.length > 0) media = await imageUpload(imgNewURL);

		setForm({
			...form,
			images: [ ...imgOldURL, ...media ],
			username: `${user.username}`,
			userId: `${user._id}`
		});

		setIsSubmitting(true);
	};

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value
		});
		console.log(JSON.stringify(form));
	};
	const handleTagChange = (e, { value }) => {
		setForm({
			...form,
			tag: value
		});
		console.log(JSON.stringify(form));
	};
	const handleEditorChange = (value) => {
		setEditorState(value);
		console.log(value);
		setForm({
			...form,
			content: `${value}`
		});
		console.log(JSON.stringify(form));
	};
	const handleUploadInput = async (e) => {
		let newImages = [];
		const files = [ ...e.target.files ];
		if (files.length === 0) return setErrors({ error: "Image doesn't exist" });
		files.forEach((file) => {
			if (file.type !== 'image/jpg' && file.type !== 'image/jpeg' && file.type !== 'image/png')
				return setErrors({ error: 'Image format invalid' });
			newImages.push(file);
			return newImages;
		});
		setImages([ ...images, ...newImages ]);
		let media = [];
		const imgNewURL = images.filter((img) => !img.url);
		const imgOldURL = images.filter((img) => img.url);
		if (imgNewURL.length > 0) media = await imageUpload(imgNewURL);
		console.log(imgNewURL);
	};
	const deleteImage = (index) => {
		const newArr = [ ...images ];
		newArr.splice(index, 1);
		setImages(newArr);
	};
	const validate = () => {
		let err = {};
		if (!form.title) {
			err.title = 'Title is required';
		}
		if (!form.tag) {
			err.tag = 'Tag is required';
		}
		if (!form.content) {
			err.content = 'Content is required';
		}
		return err;
	};

	if (!user) {
		return <div style={{ color: '#555', textAlign: 'center' }}>Please sign in to post</div>;
	}

	return (
		<React.Fragment>
			<PageHeader />
			{isSubmitting ? (
				<Loader active inline="centered" />
			) : (
				<Form onSubmit={handleSubmit} className="post-page">
					<Form.Select
						error={errors.tag ? { content: '请选择一个版块' } : null}
						name="tag"
						placeholder="请选择发布版块"
						onChange={handleTagChange}
						options={tagChildren}
					/>
					<Form.Input
						error={errors.title ? { content: '请输入标题' } : null}
						name="title"
						onChange={handleChange}
						placeholder="标题"
					/>
					<Form.TextArea name="discription" onChange={handleChange} placeholder="内容简介" />
					<Form.Field name="images" className="image-upload">
						<div className="input-image">
							<label for="upload-img">
								<CloudUploadOutlined /> 上传图片
							</label>
							<input id="upload-img" type="file" onChange={handleUploadInput} multiple accept="image/*" />
						</div>
						<div className="image-preview">
							{images.map((img, index) => (
								<div key={index} className="image-each">
									<img
										src={img.url ? img.url : URL.createObjectURL(img)}
										alt="uploaded image"
										className="image-thumbnail"
									/>
									<span
										className="hover-delete"
										onClick={() => {
											deleteImage(index);
										}}
									>
										<DeleteOutlined />
									</span>
								</div>
							))}
						</div>
					</Form.Field>
					<Form.Field name="content" error={errors.body ? { content: '请输入正文' } : null}>
						<NextQuill
							style={{ height: '500px' }}
							modules={modules}
							formats={formats}
							onChange={handleEditorChange}
						/>
					</Form.Field>
					{/* <Form.TextArea
						error={errors.body ? { content: '请输入正文' } : null}
						name="body"
						className="input-body"
						placeholder="正文"
						onChange={handleChange}
					/> */}
					<Form.Group className="post-btn">
						<Form.Button className="post-action" fluid type="submit">
							发 布
						</Form.Button>
						<Form.Button className="post-action" onClick={() => router.push('/')} fluid type="cancel">
							取 消
						</Form.Button>
					</Form.Group>
				</Form>
			)}
		</React.Fragment>
	);
}
