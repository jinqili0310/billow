/*
 * @Author: Jinqi Li
 * @Date: 2021-02-09 02:00:20
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-26 01:24:16
 * @FilePath: /billow-website/components/pageFooter.js
 */
import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import Icon from '@ant-design/icons';
import LogoW from '../public/logoW.svg';
import Wechat from '../public/wechat.svg';
import Red from '../public/red.svg';
import { InstagramFilled, YoutubeFilled, LinkedinFilled } from '@ant-design/icons';

export default function PageFooter() {
	return (
		<div className="footer-group">
			<div className="footer-div">
				<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
					<Col className="gutter-row" span={24}>
						<Icon component={LogoW} className="footer-logo" />
					</Col>
				</Row>
				<Row className="footer-social" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
					<Col span={2} />
					<Col className="gutter-row" span={4}>
						<a href="https://mp.weixin.qq.com/s/kawTbVM1LXnWhMQjD3IloQ" target="_blank">
							<Icon component={Wechat} className="footer-wechat" />
						</a>
					</Col>
					<Col className="gutter-row" span={4}>
						<a href="https://www.xiaohongshu.com/user/profile/56c148ba50c4b406569bb1ae" target="_blank">
							<Icon component={Red} className="footer-red" />
						</a>
					</Col>
					<Col className="gutter-row" span={4}>
						<a
							href="https://instagram.com/seattlelanggroup?igshid=1isg3r4e0qxhm"
							className="social-link"
							target="_blank"
						>
							<InstagramFilled className="footer-insta" />
						</a>
					</Col>
					<Col className="gutter-row" span={4}>
						<a
							href="https://www.youtube.com/channel/UCpm0ZVlnBeTw_-PaqXPauCg"
							className="social-link"
							target="_blank"
						>
							<YoutubeFilled className="footer-insta" />
						</a>
					</Col>
					<Col className="gutter-row" span={4}>
						<a href="https://www.linkedin.com/company/microbillow" className="social-link" target="_blank">
							<LinkedinFilled className="footer-insta" />
						</a>
					</Col>
					<Col span={2} />
				</Row>
			</div>

			<div className="footer-btm">
				<a href="/about">About Us</a>
				<span>{' '}|{' '}</span>
				<a href="#">Terms and Conditions</a>
				<span className="footer-right">&copy;2021 Billow</span>
			</div>
		</div>
	);
}
