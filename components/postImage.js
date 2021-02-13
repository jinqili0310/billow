/*
 * @Author: Jinqi Li
 * @Date: 2021-02-04 15:21:40
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-12 02:04:09
 * @FilePath: /billow-website/components/postImage.js
 */
import React from 'react';
import 'antd/dist/antd.css';
import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { server } from '../config';

const UPLOAD_URL = `${server}/api/images`;
const DELETE_URL = `${server}/delete`;

export default class PostImage extends React.Component {
	state = {
		previewVisible: false,
		previewImage: '',
		previewImageName: ''
	};

	showPreview = (file) => {
		this.setState({
			previewVisible: true,
			previewImage: file.url || file.thumbUrl,
			previewImageName: file.name
		});
	};

	hidePreview = () => {
		this.setState({
			previewVisible: false
		});
	};

	optimizeFileList = (data, fileList) => {
		const { name, url } = data;
		const file = fileList.pop();
		const { uid } = file;
		const newFile = { uid, name, url: `${server}/${url}` };
		fileList.push(newFile);
	};

	handleChange = ({ file, fileList }) => {
		const { status, response } = file;
		if (status === 'done') {
			const { ok, message: msg, data } = response;
			if (ok) {
				this.optimizeFileList(data, fileList);
				this.props.onChange(fileList);
				message.success(msg);
			} else {
				message.error(msg);
			}
		}
		this.setState({ fileList });
	};

	handleRemove = async (file) => {
		const { url } = file;
		if (url) {
			const path = url.replace(`${server}`, '');
			const response = await fetch(DELETE_URL, {
				method: 'delete',
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify({ path })
			});
			const { ok, message: msg } = await response.json();
			if (ok) {
				message.success(msg);
			} else {
				message.error(msg);
				return false;
			}
		}
	};

	render() {
		const { previewVisible, previewImage, previewImageName } = this.state;
		return (
			<div>
				<Upload action={UPLOAD_URL} listType="picture-card" onPreview={this.showPreview}>
					<PlusOutlined />
					<div style={{ marginTop: 8, color: '#666' }}>上传图片</div>
				</Upload>
				<Modal visible={previewVisible} footer={null} onCancel={this.hidePreview}>
					<img src={previewImage} alt={previewImageName} style={{ width: '100%' }} />
				</Modal>
			</div>
		);
	}
}
