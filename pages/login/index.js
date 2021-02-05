/*
 * @Author: Jinqi Li
 * @Date: 2021-02-04 01:10:06
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-05 02:15:47
 * @FilePath: /billow-website/pages/login/index.js
 */
import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import PageHeader from '../../components/pageHeader';

export default function Login() {
	const onFinish = (values) => {
		console.log('Received values of form: ', values);
	};

	return (
		<React.Fragment>
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
					name="username"
					rules={[
						{
							required: true,
							message: 'Please input your Username!'
						}
					]}
				>
					<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
				</Form.Item>
				<Form.Item
					name="password"
					rules={[
						{
							required: true,
							message: 'Please input your Password!'
						}
					]}
				>
					<Input
						prefix={<LockOutlined className="site-form-item-icon" />}
						type="password"
						placeholder="Password"
					/>
				</Form.Item>
				<Form.Item>
					<Form.Item name="remember" valuePropName="checked" noStyle>
						<Checkbox>Remember me</Checkbox>
					</Form.Item>

					<a className="login-form-forgot" href="/">
						Forgot password
					</a>
				</Form.Item>

				<Form.Item>
					<Button type="primary" htmlType="submit" className="login-form-button">
						Log in
					</Button>
					Or <a href="/signup">register now!</a>
				</Form.Item>
			</Form>
		</React.Fragment>
	);
}
