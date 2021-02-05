/*
 * @Author: Jinqi Li
 * @Date: 2021-02-04 13:27:46
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-05 10:52:04
 * @FilePath: \billow\components\homeCard.js
 */
import React from 'react';
import 'antd/dist/antd.css';
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

export default function HomeCard(props) {
	const { Meta } = Card;
	return (
		<Card style={{ width: 240 }} cover={props.cover} title={props.cardTitle} extra={<a href="/posts/1">Detail</a>}>
			<Meta avatar={<Avatar src={props.avatar} />} description={props.cardDescription} />
		</Card>
	);
}
