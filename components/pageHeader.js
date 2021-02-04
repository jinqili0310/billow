/*
 * @Author: Jinqi Li
 * @Date: 2021-02-03 21:50:21
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-04 01:39:22
 * @FilePath: /billow-website/components/pageHeader.js
 */
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import HeadMenu from './headMenu';
import { MenuOutlined } from '@ant-design/icons';

export default function PageHeader() {
	const [ menuOpen, setMenuOpen ] = useState(false);
	const [ isOpen, setIsOpen ] = useState(false);

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
    <div div className="page-header">
      <MenuOutlined className="menu-icon" onClick={openMenu} />
      <a href="/">
        <h1 className="company">Billow</h1>
      </a>
      <a href="/signup" className="link">
        Signup
      </a>
      <a href="/login" className="link">
        Login
      </a>

      {menuOpen ? <HeadMenu /> : <div className="placeholder" />}
    </div>
  );
}
