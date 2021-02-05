/*
 * @Author: Jinqi Li
 * @Date: 2021-02-04 01:10:51
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-04 23:41:40
 * @FilePath: /billow-website/pages/food/index.js
 */
import React from 'react';
import 'antd/dist/antd.css';
import PageHeader from '../../components/pageHeader';
import AreaIntro from '../../components/areaIntro';
import Meishi from '../../public/meishi.svg';
import PostList from '../../components/postList';

export default function Food() {
	return (
		<div>
			<PageHeader />
			<AreaIntro icon={Meishi} title="美食" />
			<PostList />
		</div>
	);
}
