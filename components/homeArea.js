/*
 * @Author: Jinqi Li
 * @Date: 2021-02-04 13:53:23
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-04 15:15:22
 * @FilePath: \billow\components\homeArea.js
 */
import React from 'react';
import HomeCard from './homeCard';

export default function HomeArea(props) {
	return (
		<div className="home-cards">
			<h3 className="card-title">{props.title}</h3>

            {/* TODO
            map cards */}
			<HomeCard
				cover={props.cover}
				cardTitle={props.cardTitle}
				avatar={props.avatar}
				cardDescription={props.cardDescription}
			/>
		</div>
	);
}
