/*
 * @Author: Jinqi Li
 * @Date: 2021-02-04 01:11:25
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-05 11:58:19
 * @FilePath: \billow\pages\outdoor\index.js
 */
import React from 'react';
import 'antd/dist/antd.css';
import PageHeader from '../../components/pageHeader';
import AreaIntro from '../../components/areaIntro';
import Huwai from '../../public/huwai.svg';
import PostList from '../../components/postList';

export default function Food() {
	return (
		<div>
			<PageHeader />
			<AreaIntro icon={Huwai} title="户外" />
			<PostList />
		</div>
	);
}
