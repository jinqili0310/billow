/*
 * @Author: Jinqi Li
 * @Date: 2021-02-04 01:11:11
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-05 11:47:37
 * @FilePath: \billow\pages\invest\index.js
 */
import React from 'react';
import 'antd/dist/antd.css';
import PageHeader from '../../components/pageHeader';
import AreaIntro from '../../components/areaIntro';
import Meigu from '../../public/meigu.svg';
import PostList from '../../components/postList';

export default function Food() {
	return (
		<div>
			<PageHeader />
			<AreaIntro icon={Meigu} title="美股" />
			<PostList />
		</div>
	);
}
