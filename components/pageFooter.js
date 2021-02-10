/*
 * @Author: Jinqi Li
 * @Date: 2021-02-09 02:00:20
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-10 04:43:28
 * @FilePath: /billow-website/components/pageFooter.js
 */
import React from 'react';
import { Row, Col } from 'antd';
import Icon from '@ant-design/icons';
import LogoW from '../public/logoW.svg';
import Wechat from '../public/wechat.svg';
import Red from '../public/red.svg';

export default function PageFooter() {
	return (
		<div className="footer-div">
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col className="gutter-row" span={24}>
					<Icon component={LogoW} className="footer-logo" />
					<h3 className="footer-follow">FOLLOW US</h3>
				</Col>
			</Row>
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col className="gutter-row" span={12}>
					<a href="https://mp.weixin.qq.com/s/kawTbVM1LXnWhMQjD3IloQ" target="_blank">
						<Icon component={Wechat} className="footer-wechat" />
					</a>
				</Col>
				<Col className="gutter-row" span={12}>
					<a href="https://www.xiaohongshu.com/user/profile/56c148ba50c4b406569bb1ae" target="_blank">
						<Icon component={Red} className="footer-red" />
					</a>
				</Col>
			</Row>
		</div>
	);
}
