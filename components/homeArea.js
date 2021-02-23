/*
 * @Author: Jinqi Li
 * @Date: 2021-02-04 13:53:23
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-21 16:15:49
 * @FilePath: /billow-website/components/homeArea.js
 */
import React from 'react';
import HomeCard from './homeCard';

export default function HomeArea(props) {
	return (
		<div className="home-cards">
			{/* <h3 className="card-title">
				<a href={props.link}>{props.title}</a>
			</h3> */}

			{/* TODO
            map cards */}
			<HomeCard
				link={props.link}
				cover={props.cover}
			/>
		</div>
	);
}
