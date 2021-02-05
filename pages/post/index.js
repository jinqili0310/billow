/*
 * @Author: Jinqi Li
 * @Date: 2021-02-04 14:27:33
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-04 15:43:35
 * @FilePath: \billow\pages\post\index.js
 */
import React from 'react';
import 'antd/dist/antd.css';
import styles from '../../styles/Home.module.css';
import PostImage from '../../components/postImage';
import PageHeader from '../../components/pageHeader';

export default function Post() {
	return (
		<React.Fragment>
			<PageHeader />
			<div className="post-page">
			</div>
			<footer className={styles.footer} />
		</React.Fragment>
	);
}
