/*
 * @Author: Jinqi Li
 * @Date: 2021-02-09 02:00:20
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-13 16:24:16
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
		<div id="aboutUs" className="footer-div">
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col className="gutter-row" span={24}>
					<Icon component={LogoW} className="footer-logo" />
					<p className="footer-text">
						Billow is a social network and professional development platform, aiming to connect talents,
						elite professional, and share thoughts. Billow is developed from Seattle Lang Group which was
						founded in June 2018. Seattle lang group is with floating elite 500 members but Billow is open
						to everyone.
					</p>
					<h3 className="footer-follow">关注我们</h3>
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
