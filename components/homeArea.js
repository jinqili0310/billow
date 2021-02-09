/*
 * @Author: Jinqi Li
 * @Date: 2021-02-04 13:53:23
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-09 01:06:25
 * @FilePath: /billow-website/components/homeArea.js
 */
import React from 'react';
import HomeCard from './homeCard';

export default function HomeArea(props) {
	return (
		<div className="home-cards">
			<h3 className="card-title">
				<a href={props.link}>{props.title}</a>
			</h3>

			{/* TODO
            map cards */}
			<HomeCard
				link={props.link}
				cover={props.cover}
				cardTitle={props.cardTitle}
				avatar={props.avatar}
				cardDescription={props.cardDescription}
			/>

			<a className="card-bottom" href={props.link}>查看所有{props.title}相关内容</a>
		</div>
	);
}
