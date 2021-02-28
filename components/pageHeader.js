/*
 * @Author: Jinqi Li
 * @Date: 2021-02-03 21:50:21
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-28 12:35:11
 * @FilePath: /billow-website/components/pageHeader.js
 */
import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import Image from 'next/image';
import HeadMenu from './headMenu';
import Icon, { MenuOutlined } from '@ant-design/icons';
import { Affix, Row, Col } from 'antd';
import { useRouter } from 'next/router';
import Meishi from '../public/meishi.svg';
import Meigu from '../public/meigu.svg';
import Dushu from '../public/dushu.svg';
import Huwai from '../public/huwai.svg';
import Sheying from '../public/sheying.svg';
import Caiyi from '../public/caiyi.svg';

function useWindowSize() {
	const [ windowSize, setWindowSize ] = useState({
		width: undefined,
		height: undefined
	});

	useEffect(() => {
		if (typeof window !== 'undefined') {
			function handleResize() {
				setWindowSize({
					width: window.innerWidth,
					height: window.innerHeight
				});
			}

			window.addEventListener('resize', handleResize);

			handleResize();

			return () => window.removeEventListener('resize', handleResize);
		}
	}, []);
	return windowSize;
}

function PageHeader() {
	const size = useWindowSize();
	const router = useRouter();

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
			{size.width <= 980 ? <MenuOutlined className="menu-icon" onClick={openMenu} /> : null}

			<a className="nav-logo" href="/">
				<Image src="/logo.png" alt="billow" width="40" height="40" />
			</a>
			<a href="/">
				<h1 className="company">I</h1>
			</a>
			{size.width > 980 ? (
				<div className="nav-gutter">
					<a href="/food" className="hover-div">
						<span className="nav-link">
							Food
						</span>
						<Icon component={Meishi} className="nav-icon" />
					</a>
					<a href="/investment" className="hover-div">
						<span className="nav-link">
							Investment
						</span>
						<Icon component={Meigu} className="nav-icon" />
					</a>
					<a href="/career" className="hover-div">
						<span className="nav-link">
							Career
						</span>
						<Icon component={Dushu} className="nav-icon" />
					</a>
					<a href="/outdoor" className="hover-div">
						<span className="nav-link">
							Outdoor
						</span>
						<Icon component={Huwai} className="nav-icon" />
					</a>

					<a href="/photography" className="hover-div">
						<span className="nav-link">
							Photography
						</span>
						<Icon component={Sheying} className="nav-icon" />
					</a>

					<a href="/talentShow" className="hover-div">
						<span className="nav-link">
							Talent Show
						</span>
						<Icon component={Caiyi} className="nav-icon" />
					</a>
				</div>
			) : null}

			{/* {user ? ( */}
				<span>
					<a href="/api/auth/logout" className="link">
						Logout
					</a>
					<a href="/posting" className="link">
						Post
					</a>
				</span>
			{/* ) : ( */}
				<span>
					{/* <a href="/api/auth/signup" className="link">
						注册
					</a> */}
					<a href="/api/auth/login" className="link">
						Login / Signup
					</a>
				</span>
			{/* )} */}

			{menuOpen ? <HeadMenu /> : null}
		</Affix>
	);
}
export default PageHeader;
