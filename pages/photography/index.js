/*
 * @Author: Jinqi Li
 * @Date: 2021-02-04 15:18:15
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-05 11:58:47
 * @FilePath: \billow\pages\photography\index.js
 */
import React from 'react';
import 'antd/dist/antd.css';
import PageHeader from '../../components/pageHeader';
import AreaIntro from '../../components/areaIntro';
import PostList from '../../components/postList';
import Sheying from '../../public/sheying.svg';

export default function Food() {
	return (
		<div>
			<PageHeader />
			<AreaIntro icon={Sheying} title="摄影" />
			<PostList />
		</div>
	);
}
