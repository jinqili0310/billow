/*
 * @Author: Jinqi Li
 * @Date: 2021-02-28 13:28:37
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-28 15:55:51
 * @FilePath: /billow-website/pages/signup/index.js
 */
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { useCurrentUser } from '../../hooks/index';
import PageHeader from '../../components/pageHeader';

const SignupPage = () => {
	const [ user, { mutate } ] = useCurrentUser();
	const [ errorMsg, setErrorMsg ] = useState('');
	useEffect(
		() => {
			// redirect to home if user is authenticated
			if (user) Router.replace('/');
		},
		[ user ]
	);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const body = {
			email: e.currentTarget.email.value,
			username: e.currentTarget.username.value,
			password: e.currentTarget.password.value
		};
		const res = await fetch('/api/users', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(body)
		});
		if (res.status === 201) {
			const userObj = await res.json();
			mutate(userObj);
		} else {
			setErrorMsg(await res.text());
		}
	};

	return (
		<React.Fragment>
			<PageHeader></PageHeader>
			<div>
				<h2>Sign up</h2>
				<form onSubmit={handleSubmit}>
					{errorMsg ? <p style={{ color: 'red' }}>{errorMsg}</p> : null}
					<label htmlFor="username">
						<input id="username" name="username" type="text" placeholder="Your name" />
					</label>
					<label htmlFor="email">
						<input id="email" name="email" type="email" placeholder="Email address" />
					</label>
					<label htmlFor="password">
						<input id="password" name="password" type="password" placeholder="Create a password" />
					</label>
					<button type="submit">Sign up</button>
				</form>
			</div>
		</React.Fragment>
	);
};

export default SignupPage;
