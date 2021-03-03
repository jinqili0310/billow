/*
* @Author: Jinqi Li
* @Date: 2021-02-28 14:27:24
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-03-03 02:43:41
 * @FilePath: /billow-website/pages/forgetpassword/index.js
*/
import React, { useState } from 'react';
import Head from 'next/head';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import PageHeader from '../../components/pageHeader';

const ForgetPasswordPage = () => {
	const [ msg, setMsg ] = useState({ message: '', isError: false });

	async function handleSubmit(e) {
		e.preventDefault(e);

		const body = {
			email: e.currentTarget.email.value
		};

		const res = await fetch('/api/user/password/reset', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(body)
		});

		if (res.status === 200) {
			setMsg({ message: 'An email has been sent to your mailbox' });
		} else {
			setMsg({ message: await res.text(), isError: true });
		}
	}

	return (
		<React.Fragment>
			<PageHeader />
			<div className="forget-password">
				{msg.message ? (
					<p style={{ color: msg.isError ? 'red' : '#0070f3', textAlign: 'center' }}>{msg.message}</p>
				) : null}
				<form className="form-content" onSubmit={handleSubmit}>
					<p>Do not worry. Simply enter your email address below.</p>
					<label htmlFor="email">
						<input className="my-input" id="email" type="email" placeholder="Email" />
					</label>
					<button className="my-primary" type="submit">
						Submit
					</button>
				</form>
			</div>
		</React.Fragment>
	);
};

export default ForgetPasswordPage;
