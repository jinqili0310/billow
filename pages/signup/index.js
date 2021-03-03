/*
 * @Author: Jinqi Li
 * @Date: 2021-02-28 13:28:37
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-03-03 02:27:43
 * @FilePath: /billow-website/pages/signup/index.js
 */
import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import Head from 'next/head';
import Router from 'next/router';
import { useCurrentUser } from '../../hooks/index';
import PageHeader from '../../components/pageHeader';
import { Steps, Button, message } from 'antd';

const { Step } = Steps;

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

	const returnPhone = `
				<div class="phone-div">
					<span>Phone number</span>
					<input class="my-input" />
					<button class="my-primary">Validate</button>
				</div>
				<div class="phone-div">
					<span>Validate code</span>
					<input class="my-input" />
				</div>
	`;

	const returnForm = `
				<form onSubmit={handleSubmit} class="form-content">
					<label htmlFor="username">
						Username
						<input class="my-input" id="username" name="username" type="text" />
					</label>
					<label htmlFor="email">
						Email
						<input class="my-input" id="email" name="email" type="email" />
					</label>
					<label htmlFor="password">
						Password
						<input class="my-input" id="password" name="password" type="password" />
					</label>
					<button class="my-primary" type="submit">Sign up</button>
				</form>
			`;

	const [ current, setCurrent ] = useState(0);

	const next = () => {
		setCurrent(current + 1);
	};

	const prev = () => {
		setCurrent(current - 1);
	};

	const steps = [
		{
			title: 'First',
			content: <div className="register-phone" dangerouslySetInnerHTML={{ __html: returnPhone }} />
		},
		{
			title: 'Second',
			content: <div className="register-second" dangerouslySetInnerHTML={{ __html: returnForm }} />
		},
		{
			title: 'Last',
			content: 'Terms of Use'
		}
	];

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
		console.log(body);
		if (res.status === 201) {
			const userObj = await res.json();
			mutate(userObj);
			message.success('Register success!');
		} else {
			setErrorMsg(await res.text());
		}
	};

	return (
		<React.Fragment>
			<PageHeader />
			<div id="register">
				{errorMsg ? <p style={{ color: 'red' }}>{errorMsg}</p> : null}
				<Steps current={current}>{steps.map((item) => <Step key={item.title} title={item.title} />)}</Steps>

				<div className="steps-content">{steps[current].content}</div>

				<div className="steps-action">
					{current < steps.length - 1 && (
						<Button type="primary" onClick={() => next()}>
							Next
						</Button>
					)}
					{current === steps.length - 1 && (
						<Button
							type="primary"
							onClick={() => {
								Router.replace('/');
							}}
						>
							Done
						</Button>
					)}
					{current > 0 && (
						<Button style={{ margin: '0 8px' }} onClick={() => prev()}>
							Previous
						</Button>
					)}
				</div>
			</div>
		</React.Fragment>
	);
};

export default SignupPage;
