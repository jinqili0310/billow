/*
 * @Author: Jinqi Li
 * @Date: 2021-02-04 01:08:07
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-09 01:25:59
 * @FilePath: /billow-website/components/homeCarousel.js
 */
import React from 'react';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';

export default function HomeCarousel() {
	return (
		<Carousel autoplay>
			<div>
				<a href="/food">
				<h3 className="carousel-text" >
				<img src='/food.jpg' alt="billow food" className="carousel-img"/>
				</h3>
				</a>
			</div>
			<div>
				<a href="/invest">
				<h3 className="carousel-text" >
				<img src='/invest.jpg' alt="billow invest" className="carousel-img"/>
				</h3>
				</a>
			</div>
			<div>
				<a href="/growth">
				<h3 className="carousel-text" >
				<img src='/growth.jpg' alt="billow growth" className="carousel-img"/>
				</h3>
				</a>
			</div>
			<div>
				<a href="/outdoor">
				<h3 className="carousel-text" >
				<img src='/outdoor.jpg' alt="billow outdoor" className="carousel-img"/>
				</h3>
				</a>
			</div>
			<div>
				<a href="/photography">
				<h3 className="carousel-text" >
				<img src='/photography.jpg' alt="billow photography" className="carousel-img"/>
				</h3>
				</a>
			</div>
			<div>
				<a href="/show">
				<h3 className="carousel-text" >
				<img src='/show.jpg' alt="billow show" className="carousel-img"/>
				</h3>
				</a>
			</div>
		</Carousel>
	);
}
