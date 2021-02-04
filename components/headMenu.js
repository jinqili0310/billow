/*
 * @Author: Jinqi Li
 * @Date: 2021-02-03 21:53:11
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-04 01:12:38
 * @FilePath: /billow-website/components/headMenu.js
 */
import React from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import Icon from '@ant-design/icons';
import Meishi from '../public/meishi.svg';
import Meigu from '../public/meigu.svg';
import Dushu from '../public/dushu.svg';
import Huwai from '../public/huwai.svg';

export default function HeadMenu() {
	const dataSrc = [
		{
			key: 1,
			iconSrc: <Icon component={Meishi} className="custom-icon" />,
			area: <a href="/food">美食</a>
		},
		{
			key: 2,
			iconSrc: <Icon component={Meigu} className="custom-icon" />,
			area: <a href="/invest">美股</a>
		},
		{
			key: 3,
			iconSrc: <Icon component={Dushu} className="custom-icon" />,
			area: <a href="/growth">读书/职场</a>
		},
		{
			key: 4,
			iconSrc: <Icon component={Huwai} className="custom-icon" />,
			area: <a href="/hike">户外</a>
		}
	];
	const columns = [
		{
			dataIndex: 'iconSrc',
			key: 'iconSrc'
		},
		{
			dataIndex: 'area',
			key: 'area'
		}
	];

	const openWindow = () => {
		console.log('privacy policy');
	};

	return (
		<div className="head-menu">
			<div className="menu-top">
				<Table className="menu-table" dataSource={dataSrc} columns={columns} />
			</div>
			<div className="menu-bottom">
				<a className="menu-bottom-link" href="/about">
					About Us
				</a>
				<a className="menu-bottom-link" onClick={openWindow}>
					Privacy Policies
				</a>
			</div>
		</div>
	);
}
