/*
 * @Author: Jinqi Li
 * @Date: 2021-02-04 01:08:07
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-04 01:35:44
 * @FilePath: /billow-website/components/homeCarousel.js
 */
import React from 'react';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';

export default function HomeCarousel() {
	return (
		<Carousel dotPosition="bottom" autoplay>
			<div>
				<h3 className="carousel-text" />
			</div>
			<div>
				<h3 className="carousel-text" />
			</div>
			<div>
				<h3 className="carousel-text" />
			</div>
			<div>
				<h3 className="carousel-text" />
			</div>
		</Carousel>
	);
}
