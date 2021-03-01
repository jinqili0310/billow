/*
 * @Author: Jinqi Li
 * @Date: 2021-02-04 01:08:07
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-28 17:30:22
 * @FilePath: /billow-website/components/homeCarousel.js
 */
import React from 'react';
import 'antd/dist/antd.css';
import { Carousel, Row, Col } from 'antd';

export default function HomeCarousel() {
	return (
		<React.Fragment>
			<div className="slider-div">
				<ul className="cb-slideshow">
					<li>
						<span>Image 01</span>
						<div>
							<h3>Image 01</h3>
						</div>
					</li>
					<li>
						<span>Image 02</span>
						<div>
							<h3>Image 02</h3>
						</div>
					</li>
					<li>
						<span>Image 03</span>
						<div>
							<h3>Image 03</h3>
						</div>
					</li>
				</ul>
			</div>
		</React.Fragment>
	);
}
