/*
 * @Author: Jinqi Li
 * @Date: 2021-02-05 00:02:03
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-05 01:16:54
 * @FilePath: /billow-website/styles/globals.css
 */
import React from 'react';
import 'antd/dist/antd.css';
import { Card, Avatar, Comment, Tooltip, List, Input, Form, Button } from 'antd';
import { ShareAltOutlined, EllipsisOutlined, CommentOutlined } from '@ant-design/icons';
import moment from 'moment';
import reqwest from 'reqwest';
import PageHeader from '../../components/pageHeader';

const { Meta } = Card;
const { TextArea } = Input;

const fakeDataUrl = 'https://jsonplaceholder.typicode.com/posts/1';

const FakeComments = [
	{
		// actions: [ <span key="comment-list-reply-to-0">Reply to</span> ],
		author: 'Author',
		avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
		content: (
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
				dolore magna aliqua.
			</p>
		),
		datetime: (
			<Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
				<span>{moment().subtract(1, 'days').fromNow()}</span>
			</Tooltip>
		)
	},
	{
		// actions: [ <span key="comment-list-reply-to-0">Reply to</span> ],
		author: 'Author',
		avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
		content: (
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
				dolore magna aliqua.
			</p>
		),
		datetime: (
			<Tooltip title={moment().subtract(2, 'hours').format('YYYY-MM-DD HH:mm:ss')}>
				<span>{moment().subtract(2, 'hours').fromNow()}</span>
			</Tooltip>
		)
	}
];

const CommentList = ({ comments }) => (
	<List
		dataSource={comments}
		header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
		itemLayout="horizontal"
		renderItem={(props) => <Comment {...props} />}
	/>
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
	<div>
		<Form.Item>
			<TextArea rows={4} onChange={onChange} value={value} />
		</Form.Item>
		<Form.Item>
			<Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
				Add Comment
			</Button>
		</Form.Item>
	</div>
);

class PostOne extends React.Component {
	state = {
		data: [],
		comments: FakeComments,
		submitting: false,
		value: ''
	};

	loadedRowsMap = {};

	componentDidMount() {
		this.fetchData((res) => {
			this.setState({
				data: res
			});
		});
	}

	fetchData = (callback) => {
		reqwest({
			url: fakeDataUrl,
			type: 'json',
			method: 'get',
			contentType: 'application/json',
			success: (res) => {
				callback(res);
			}
		});
	};

	handleSubmit = () => {
		if (!this.state.value) {
			return;
		}

		this.setState({
			submitting: true
		});

		setTimeout(() => {
			this.setState({
				submitting: false,
				value: '',
				comments: [
					...this.state.comments,
					{
						author: 'Author',
						avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
						content: <p>{this.state.value}</p>,
						datetime: moment().fromNow()
					}
				]
			});
		}, 1000);
	};

	handleChange = (e) => {
		this.setState({
			value: e.target.value
		});
	};

	render() {
		const { data, comments, submitting, value } = this.state;
		return (
			<React.Fragment>
				<PageHeader />
				<div className="post-content">
					<Card
						actions={[
							<CommentOutlined key="comment" />,
							<ShareAltOutlined key="share" />,
							<EllipsisOutlined key="ellipsis" />
						]}
					>
						<Meta
							avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
							title={data.title}
							description="This is the description"
						/>
					</Card>
					<Card>
						<img
							style={{ margin: '0 auto 1em auto', display: 'block' }}
							width={272}
							alt="logo"
							src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
						/>
						<p>{data.body}</p>
					</Card>
				</div>

				{comments.length > 0 && <CommentList comments={comments} />}
				<Comment
					avatar={
						<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="Han Solo" />
					}
					content={
						<Editor
							onChange={this.handleChange}
							onSubmit={this.handleSubmit}
							submitting={submitting}
							value={value}
						/>
					}
				/>
			</React.Fragment>
		);
	}
}

export default PostOne;
