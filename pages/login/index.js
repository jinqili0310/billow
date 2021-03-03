/*
 * @Author: Jinqi Li
 * @Date: 2021-02-28 13:30:48
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-03-03 02:38:55
 * @FilePath: /billow-website/pages/login/index.js
 */
import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCurrentUser } from '../../hooks/index';
import PageHeader from '../../components/pageHeader';
import { message } from 'antd';

const LoginPage = () => {
	const router = useRouter();
	const [ errorMsg, setErrorMsg ] = useState('');
	const [ user, { mutate } ] = useCurrentUser();
	useEffect(
		() => {
			// redirect to home if user is authenticated
			if (user) router.push('/');
		},
		[ user ]
	);

	async function onSubmit(e) {
		e.preventDefault();
		const body = {
			email: e.currentTarget.email.value,
			password: e.currentTarget.password.value
		};
		const res = await fetch('/api/auth', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(body)
		});
		if (res.status === 200) {
			const userObj = await res.json();
			mutate(userObj);
			message.success('Login success!');
		} else {
			setErrorMsg('Incorrect username or password. Try again!');
		}
	}

	return (
		<React.Fragment>
			<PageHeader />
			<div id="login">
				<form onSubmit={onSubmit} className="form-content">
					{errorMsg ? <p style={{ color: 'red' }}>{errorMsg}</p> : null}
					<label htmlFor="email">
						Email
						<input className="my-input" id="email" type="email" name="email" placeholder="Email address" />
					</label>
					<label htmlFor="password">
						Password
						<input className="my-input" id="password" type="password" name="password" placeholder="Password" />
					</label>
					<button className="my-primary" type="submit">Sign in</button>
					{"  "}
					<Link href="/forgetpassword">
						<a>Forget password</a>
					</Link>
				</form>
			</div>
		</React.Fragment>
	);
};

export default LoginPage;
