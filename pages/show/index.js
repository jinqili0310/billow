/*
 * @Author: Jinqi Li
 * @Date: 2021-02-04 15:17:58
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-09 01:59:00
 * @FilePath: /billow-website/pages/show/index.js
 */
import React from 'react';
import 'antd/dist/antd.css';
import PageHeader from '../../components/pageHeader';
import AreaIntro from '../../components/areaIntro';
import PostList from '../../components/postList';
import Caiyi from '../../public/caiyi.svg';

export default function Food() {
	return (
		<div>
			<PageHeader />
			<AreaIntro icon={Caiyi} title="戏精才艺展示" />
			<PostList />
		</div>
	);
}
