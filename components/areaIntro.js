/*
 * @Author: Jinqi Li
 * @Date: 2021-02-04 20:57:33
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-04 22:33:19
 * @FilePath: /billow-website/components/areaIntro.js
 */
import React from 'react';
import Icon from '@ant-design/icons';

export default function AreaIntro(props) {
	return (
		<div className="intro-div">
			<Icon className="custom-icon" component={props.icon} />
			<h1 className="intro-title">{props.title}</h1>
		</div>
	);
}
