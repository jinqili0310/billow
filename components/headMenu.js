/*
 * @Author: Jinqi Li
 * @Date: 2021-02-03 21:53:11
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-25 02:09:00
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
import Sheying from '../public/sheying.svg';
import Caiyi from '../public/caiyi.svg';

export default function HeadMenu() {
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

	const dataSrc = [
		{
			key: 1,
			iconSrc: <Icon component={Meishi} className="custom-icon" />,
			area: <a href="/food">Food</a>
		},
		{
			key: 2,
			iconSrc: <Icon component={Meigu} className="custom-icon" />,
			area: <a href="/investment">Investment</a>
		},
		{
			key: 3,
			iconSrc: <Icon component={Dushu} className="custom-icon" />,
			area: <a href="/career">Career</a>
		},
		{
			key: 4,
			iconSrc: <Icon component={Huwai} className="custom-icon" />,
			area: <a href="/outdoor">Outdoor</a>
		},
		{
			key: 5,
			iconSrc: <Icon component={Sheying} className="custom-icon" />,
			area: <a href="/photography">Photography</a>
		},
		{
			key: 6,
			iconSrc: <Icon component={Caiyi} className="custom-icon" />,
			area: <a href="/talentShow">Talent Show</a>
		}
	];

	return (
		<div className="head-menu">
			<div className="menu-top">
				<Table className="menu-table" dataSource={dataSrc} columns={columns} />
			</div>
			{/* <div className="menu-bottom">
				<a className="menu-bottom-link" href="/#aboutUs">
					About Us
				</a>
				<a className="menu-bottom-link" onClick={openWindow}>
					Terms and Conditions
				</a>
			</div> */}
		</div>
	);
}
