/*
 * @Author: Jinqi Li
 * @Date: 2021-02-04 01:10:06
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-13 17:19:53
 * @FilePath: /billow-website/pages/login/index.js
 */
import React, { useState, useContext, useEffect } from 'react';
import Head from 'next/head';
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import PageHeader from '../../components/pageHeader';
import { postData } from '../../utils/fetchData';
import Cookie from 'js-cookie';
import { useRouter } from 'next/router';
import { DataContext } from '../../store/GlobalState';

export default function Login() {
	const router = useRouter();

	const { state, dispatch } = useContext(DataContext);
	const { auth } = state;

	const onFinish = async (values) => {
		console.log('Received values of form: ', values);
		const res = await postData('auth/login', values);
		dispatch({
			type: 'AUTH',
			payload: {
				token: res.access_token,
				user: res.user
			}
		});

		Cookie.set('refreshtoken', res.refresh_token, {
			path: 'api/auth/accessToken',
			expires: 30
		});
		localStorage.setItem('firstLogin', true);
	};

	useEffect(
		() => {
			if (Object.keys(auth).length !== 0) router.push('/');
		},
		[ auth ]
	);

	return (
		<React.Fragment>
			<Head>
				<title>Billow</title>
				<link rel="icon" href="/logo.ico" />
			</Head>
			<PageHeader />
			<Form
				name="normal_login"
				className="login-form"
				initialValues={{
					remember: true
				}}
				onFinish={onFinish}
			>
				<Form.Item
					name="email"
					rules={[
						{
							required: true,
							message: '请输入您的邮箱地址'
						}
					]}
				>
					<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="邮箱地址" />
				</Form.Item>
				<Form.Item
					name="password"
					rules={[
						{
							required: true,
							message: '请输入您的密码'
						}
					]}
				>
					<Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="密码" />
				</Form.Item>
				<Form.Item>
					{/* <Form.Item name="remember" valuePropName="checked" noStyle>
						<Checkbox>记住我</Checkbox>
					</Form.Item> */}

					<a className="login-form-forgot" href="mailto:li.jinqi@microbillow.com">
						忘记密码
					</a>
				</Form.Item>

				<Form.Item>
					<Button type="primary" htmlType="submit" className="login-form-button">
						登录
					</Button>
					没有账号？ <a href="/signup">注册</a>
				</Form.Item>
			</Form>
		</React.Fragment>
	);
}
