/*
 * @Author: Jinqi Li
 * @Date: 2021-02-04 01:12:07
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-05 00:00:07
 * @FilePath: /billow-website/pages/growth/index.js
 */
import React from 'react';
import 'antd/dist/antd.css';
import PageHeader from '../../components/pageHeader';
import AreaIntro from '../../components/areaIntro';
import Dushu from '../../public/dushu.svg';
import PostList from '../../components/postList';

export default function Food() {
	return (
		<div>
			<PageHeader />
			<AreaIntro icon={Dushu} title="读书/职场" />
			<PostList />
		</div>
	);
}