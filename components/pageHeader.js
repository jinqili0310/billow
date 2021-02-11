/*
 * @Author: Jinqi Li
 * @Date: 2021-02-03 21:50:21
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-11 09:18:09
 * @FilePath: /billow-website/components/pageHeader.js
 */
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import Image from 'next/image';
import HeadMenu from './headMenu';
import { MenuOutlined } from '@ant-design/icons';
import { Affix } from 'antd';

export default function PageHeader() {
	const [ menuOpen, setMenuOpen ] = useState(false);
	const [ isOpen, setIsOpen ] = useState(false);
	const [ top, setTop ] = useState(10);

	const openMenu = (e) => {
		e.preventDefault();
		if (isOpen) {
			setMenuOpen(false);
			setIsOpen(false);
		} else {
			setMenuOpen(true);
			setIsOpen(true);
		}
	};

	return (
		<Affix offsetTop={top} className="page-header">
			<MenuOutlined className="menu-icon" onClick={openMenu} />
			<a href="/">
				<Image src="/logo.png" alt="billow" width="30" height="30" />
			</a>
			<a href="/">
				<h1 className="company">Billow</h1>
			</a>
			<a href="/signup" className="link">
				注册
			</a>
			<a href="/login" className="link">
				登录
			</a>

			{menuOpen ? <HeadMenu /> : <div className="placeholder" />}
		</Affix>
	);
}
