/*
 * @Author: Jinqi Li
 * @Date: 2021-02-03 21:50:21
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-13 17:18:24
 * @FilePath: /billow-website/components/pageHeader.js
 */
import React, { useState, useContext } from 'react';
import 'antd/dist/antd.css';
import Image from 'next/image';
import HeadMenu from './headMenu';
import { MenuOutlined } from '@ant-design/icons';
import { Affix } from 'antd';
import { useRouter } from 'next/router';
import { DataContext } from '../store/GlobalState';
import Cookie from 'js-cookie';

function PageHeader() {
	const router = useRouter();
	const { state, dispatch } = useContext(DataContext);
	const { auth } = state;

	const handleLogout = () => {
		Cookie.remove('refreshtoken', { path: 'api/auth/accessToken' });
		localStorage.removeItem('firstLogin');
		dispatch({ type: 'AUTH', payload: {} });
		return router.push('/');
	};

	const loggedRouter = () => {
		return (
			<span>
				<a onClick={handleLogout} className="link">
					登出
				</a>
				<a href="/posting" className="link">
					发布文章
				</a>
			</span>
		);
	};

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
			{Object.keys(auth).length === 0 ? (
				<span>
					<a href="/signup" className="link">
						注册
					</a>
					<a href="/login" className="link">
						登录
					</a>
				</span>
			) : (
				loggedRouter()
			)}

			{menuOpen ? <HeadMenu /> : null}
		</Affix>
	);
}
export default PageHeader;
