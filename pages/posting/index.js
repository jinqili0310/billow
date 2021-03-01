/*
 * @Author: Jinqi Li
 * @Date: 2021-02-04 14:27:33
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-28 16:12:09
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
import { useCurrentUser } from '../../hooks/index';

export default function Posting() {
	const [user] = useCurrentUser();

  const [msg, setMsg] = useState(null);

  if (!user) {
    return (
      <div style={{ color: '#555', textAlign: 'center' }}>
        Please sign in to post
      </div>
    );
  }

	const tagChildren = [
		{ key: 'food', text: '美食', value: 'food' },
		{ key: 'investment', text: '美股', value: 'investment' },
		{ key: 'career', text: '读书/职场', value: 'career' },
		{ key: 'outdoor', text: '户外', value: 'outdoor' },
		{ key: 'photography', text: '摄影', value: 'photography' },
		{ key: 'talentShow', text: '戏精才艺展示', value: 'talentShow' }
	];

	const [ form, setForm ] = useState({ title: '', tag: '', description: '', images: [], body: '' });
	const [ isSubmitting, setIsSubmitting ] = useState(false);
	const [ errors, setErrors ] = useState({});
	const router = useRouter();
	const [ images, setImages ] = useState([]);

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
		try {
			console.log(form);
			const res = await fetch(`${server}/api/posts`, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(form)
			});
			router.push('/');
		} catch (error) {
			console.log(error);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		let errs = validate();
		setErrors(errs);
		const body = {
			content: e.currentTarget.content.value,
		  };
		  if (!e.currentTarget.content.value) return;
		  e.currentTarget.content.value = '';

		let media = [];
		const imgNewURL = images.filter((img) => !img.url);
		const imgOldURL = images.filter((img) => img.url);
		if (imgNewURL.length > 0) media = await imageUpload(imgNewURL);

		setForm({
			...form,
			images: [...imgOldURL, ...media],
			username: user.nickname,
			userId: user._id
		});

		if (res.ok) {
			setMsg('Posted!');
			setTimeout(() => setMsg(null), 5000);
		  }

		setIsSubmitting(true);
	};

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value
		});
	};

	const handleTagChange = (e, { value }) => {
		setForm({
			...form,
			tag: value
		});
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
		if (!form.body) {
			err.body = 'Body is required';
		}

		return err;
	};

	return (
		<React.Fragment>
			<Head>
				<title>Billow</title>
				<link rel="icon" href="/logo.ico" />
			</Head>
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

					<Form.TextArea
						error={errors.body ? { content: '请输入正文' } : null}
						name="body"
						className="input-body"
						placeholder="正文"
						onChange={handleChange}
					/>

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
