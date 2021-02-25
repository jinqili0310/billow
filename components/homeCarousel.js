/*
 * @Author: Jinqi Li
 * @Date: 2021-02-04 01:08:07
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-25 01:25:58
 * @FilePath: /billow-website/components/homeCarousel.js
 */
import React from 'react';
import 'antd/dist/antd.css';
import { Carousel, Row, Col } from 'antd';

export default function HomeCarousel() {
	return (
		<React.Fragment>
			<Row className="carousel-row">
				<Col span={2} />
				<Col span={10}>
					<Carousel autoplay>
						<div>
							<a href="/food">
								<h3 className="carousel-text">
									<img src="/food1.png" alt="billow food" className="carousel-img" />
								</h3>
							</a>
						</div>
						<div>
							<a href="/investment">
								<h3 className="carousel-text">
									<img src="/invest1.png" alt="billow investment" className="carousel-img" />
								</h3>
							</a>
						</div>
						<div>
							<a href="/career">
								<h3 className="carousel-text">
									<img src="/growth1.png" alt="billow career" className="carousel-img" />
								</h3>
							</a>
						</div>
					</Carousel>
				</Col>
				<Col span={10}>
					<Carousel autoplay>
						<div>
							<a href="/outdoor">
								<h3 className="carousel-text">
									<img src="/outdoor1.png" alt="billow outdoor" className="carousel-img" />
								</h3>
							</a>
						</div>
						<div>
							<a href="/photography">
								<h3 className="carousel-text">
									<img src="/photography1.png" alt="billow photography" className="carousel-img" />
								</h3>
							</a>
						</div>
						<div>
							<a href="/talentShow">
								<h3 className="carousel-text">
									<img src="/show1.png" alt="billow talent show" className="carousel-img" />
								</h3>
							</a>
						</div>
					</Carousel>
				</Col>
				<Col span={2} />
			</Row>
		</React.Fragment>
	);
}
