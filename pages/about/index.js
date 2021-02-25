/*
 * @Author: Jinqi Li
 * @Date: 2021-02-25 01:54:46
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-25 02:03:31
 * @FilePath: /billow-website/pages/about/index.js
 */
import React from 'react';
import 'antd/dist/antd.css';
import PageHeader from '../../components/pageHeader';
import Head from 'next/head';

export default function About() {
	return (
		<React.Fragment>
			<Head>
				<title>Billow</title>
				<link rel="icon" href="/logo.ico" />
			</Head>
			<PageHeader />
			<div className="about-div">
				<div className="about-first">
					<h1 className="intro-title about-title">About Us</h1>
				</div>
				<p className="about-text">
					Billow is a social network and professional development platform, aiming to connect talents,
					elite professional, and share thoughts.<br />
					<br />Billow is developed from Seattle Lang Group which was founded in June 2018.<br />
					<br />Seattle lang group is with floating elite 500 members but Billow is open to everyone.
				</p>
			</div>
		</React.Fragment>
	);
}
