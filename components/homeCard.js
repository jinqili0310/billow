/*
 * @Author: Jinqi Li
 * @Date: 2021-02-04 13:27:46
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-26 01:37:40
 * @FilePath: /billow-website/components/homeCard.js
 */
import React from 'react';
import 'antd/dist/antd.css';
import { Card, Avatar } from 'antd';

export default function HomeCard(props) {
	const { Meta } = Card;
	const handleClick = () => {
		window.open(`${props.link}`, '_self');
	};
	return (
		<div  onClick={handleClick}>
			<Card hoverable={false} bordered={false} cover={props.cover} />
		</div>
	);
}
