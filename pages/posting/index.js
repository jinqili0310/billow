/*
 * @Author: Jinqi Li
 * @Date: 2021-02-04 14:27:33
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-11 13:02:43
 * @FilePath: /billow-website/pages/posting/index.js
 */
import React from 'react';
import 'antd/dist/antd.css';
import PostImage from '../../components/postImage';
import PageHeader from '../../components/pageHeader';
import { Input, Select, Button } from 'antd';

const { TextArea } = Input;
const { Option } = Select;

const tagChildren = [];
tagChildren.push(<Option key="food">美食</Option>);
tagChildren.push(<Option key="investment">美股</Option>);
tagChildren.push(<Option key="career">读书/职场</Option>);
tagChildren.push(<Option key="outdoor">户外</Option>);
tagChildren.push(<Option key="photography">摄影</Option>);
tagChildren.push(<Option key="talentShow">戏精才艺展示</Option>);

const handleChange = function(value) {
	console.log(`Selected: ${value}`);
};

export default function Posting() {
	return (
		<React.Fragment>
			<PageHeader />
			<div className="post-page">
				<TextArea placeholder="标题" autoSize showCount maxLength={40} />

				<Select
					bordered={false}
					mode="multiple"
					required
					placeholder="请选择发布版块"
					onChange={handleChange}
					style={{ width: '100%' }}
				>
					{tagChildren}
				</Select>

				<TextArea placeholder="内容简介" autoSize={{ minRows: 2, maxRows: 4 }} showCount maxLength={100} />
				<PostImage />
				<TextArea className="input-body" placeholder="正文" autoSize={{ minRow: 4 }} bordered={false} />

				<div className="post-btn">
					<Button type="primary" shape="round" size="large">
						发布
					</Button>
					<Button type="secondary" shape="round" size="large">
						取消
					</Button>
				</div>
			</div>
		</React.Fragment>
	);
}
