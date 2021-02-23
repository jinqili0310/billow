/*
 * @Author: Jinqi Li
 * @Date: 2021-02-09 02:00:20
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-22 23:44:21
 * @FilePath: /billow-website/components/pageFooter.js
 */
import React from 'react';
import { Row, Col } from 'antd';
import Icon from '@ant-design/icons';
import LogoW from '../public/logoW.svg';
import Wechat from '../public/wechat.svg';
import Red from '../public/red.svg';
import { InstagramFilled, YoutubeFilled } from '@ant-design/icons';

export default function PageFooter() {
	return (
		<div id="aboutUs" className="footer-div">
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col className="gutter-row" span={24}>
					<Icon component={LogoW} className="footer-logo" />
					<p className="footer-text">
						Billow is a social network and professional development platform,<br />aiming to connect
						talents, elite professional, and share thoughts.<br /><br />Billow is developed from Seattle Lang
						Group which was founded in June 2018.<br /><br />Seattle lang group is with floating elite 500
						members but Billow is open to everyone.
					</p>
					<h1 className="footer-follow"><i>FOLLOW US</i></h1>
				</Col>
			</Row>
			<Row
				className="footer-social"
				gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
			>
				<Col className="gutter-row" span={6}>
					<a href="https://mp.weixin.qq.com/s/kawTbVM1LXnWhMQjD3IloQ" target="_blank">
						<Icon component={Wechat} className="footer-wechat" />
					</a>
				</Col>
				<Col className="gutter-row" span={6}>
					<a href="https://www.xiaohongshu.com/user/profile/56c148ba50c4b406569bb1ae" target="_blank">
						<Icon component={Red} className="footer-red" />
					</a>
				</Col>
				<Col className="gutter-row" span={6}>
					<a
						href="https://instagram.com/seattlelanggroup?igshid=1isg3r4e0qxhm"
						className="social-link"
						target="_blank"
					>
						<InstagramFilled className="footer-insta" />
					</a>
				</Col>
				<Col className="gutter-row" span={6}>
					<a
						href="https://www.youtube.com/channel/UCpm0ZVlnBeTw_-PaqXPauCg"
						className="social-link"
						target="_blank"
					>
						<YoutubeFilled className="footer-insta" />
					</a>
				</Col>
			</Row>
		</div>
	);
}
