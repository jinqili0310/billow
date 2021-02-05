/*
 * @Author: Jinqi Li
 * @Date: 2021-02-04 13:27:46
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-04 15:13:26
 * @FilePath: \billow\components\homeCard.js
 */
import React from 'react';
import 'antd/dist/antd.css';
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

export default function HomeCard(props) {
	const { Meta } = Card;
    return (
		<Card
			style={{ width: 240 }}
			cover={props.cover}
			actions={[
				<SettingOutlined key="setting" />,
				<EditOutlined key="edit" />,
				<EllipsisOutlined key="ellipsis" />
			]}
		>
			<Meta avatar={<Avatar src={props.avatar} />} title={props.cardTitle} description={props.cardDescription} />
		</Card>
	);
}
