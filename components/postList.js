/*
 * @Author: Jinqi Li
 * @Date: 2021-02-04 23:08:34
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-05 00:23:11
 * @FilePath: /billow-website/components/postList.js
 */
import React from 'react';
import { List, message, Avatar, Spin, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

import reqwest from 'reqwest';

import WindowScroller from 'react-virtualized/dist/commonjs/WindowScroller';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import VList from 'react-virtualized/dist/commonjs/List';
import InfiniteLoader from 'react-virtualized/dist/commonjs/InfiniteLoader';

const fakeDataUrl = 'https://jsonplaceholder.typicode.com/posts';

const IconText = ({ icon, text }) => (
	<Space>
		{React.createElement(icon)}
		{text}
	</Space>
);

class PostList extends React.Component {
	state = {
		data: [],
		loading: false
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

	handleInfiniteOnLoad = ({ startIndex, stopIndex }) => {
		let { data } = this.state;
		this.setState({
			loading: true
		});
		for (let i = startIndex; i <= stopIndex; i++) {
			// 1 means loading
			this.loadedRowsMap[i] = 1;
		}
		if (data.length > 99) {
			// message.warning('Post List loaded all');
			this.setState({
				loading: false
			});
			return;
		}
		this.fetchData((res) => {
			data = data.concat(res);
			this.setState({
				data,
				loading: false
			});
		});
	};

	isRowLoaded = ({ index }) => !!this.loadedRowsMap[index];

	renderItem = ({ index, key }) => {
		const { data } = this.state;
		const item = data[index];
		return (
			<List.Item
				key={key}
				actions={[
					<IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
					<IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
					<IconText icon={MessageOutlined} text="2" key="list-vertical-message" />
				]}
				extra={
					<img
						width={102}
						alt="logo"
						src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
					/>
				}
			>
				<List.Item.Meta
					title={<a href={'/posts/1'}>{item.title}</a>}
				/>
				{/* {item.body} */}
			</List.Item>
		);
	};

	render() {
		const { data } = this.state;
		const vlist = ({ height, isScrolling, onChildScroll, scrollTop, onRowsRendered, width }) => (
			<VList
				autoHeight
				height={height}
				isScrolling={isScrolling}
				onScroll={onChildScroll}
				overscanRowCount={2}
				rowCount={data.length}
				rowHeight={73}
				rowRenderer={this.renderItem}
				onRowsRendered={onRowsRendered}
				scrollTop={scrollTop}
				width={width}
			/>
		);
		const autoSize = ({ height, isScrolling, onChildScroll, scrollTop, onRowsRendered }) => (
			<AutoSizer disableHeight>
				{({ width }) =>
					vlist({
						height,
						isScrolling,
						onChildScroll,
						scrollTop,
						onRowsRendered,
						width
					})}
			</AutoSizer>
		);
		const infiniteLoader = ({ height, isScrolling, onChildScroll, scrollTop }) => (
			<InfiniteLoader
				isRowLoaded={this.isRowLoaded}
				loadMoreRows={this.handleInfiniteOnLoad}
				rowCount={data.length}
			>
				{({ onRowsRendered }) =>
					autoSize({
						height,
						isScrolling,
						onChildScroll,
						scrollTop,
						onRowsRendered
					})}
			</InfiniteLoader>
		);
		return (
			<List itemLayout="vertical" size="large">
				{data.length > 0 && <WindowScroller>{infiniteLoader}</WindowScroller>}
				{this.state.loading && <Spin className="demo-loading" />}
			</List>
		);
	}
}

export default PostList;
