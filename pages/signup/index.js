/*
 * @Author: Jinqi Li
 * @Date: 2021-02-04 01:09:53
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-13 18:28:41
 * @FilePath: /billow-website/pages/signup/index.js
 */
import React, { useState, useContext, useEffect } from 'react';
import Head from 'next/head';
import PageHeader from '../../components/pageHeader';
import 'antd/dist/antd.css';
import { Form, Input, Select, Checkbox, Button } from 'antd';
import { postData } from '../../utils/fetchData';
import { useRouter } from 'next/router';
import { DataContext } from '../../store/GlobalState';
import 'semantic-ui-css/semantic.min.css';
import { Loader } from 'semantic-ui-react';

const { Option } = Select;

const formItemLayout = {
	labelCol: {
		xs: {
			span: 24
		},
		sm: {
			span: 8
		}
	},
	wrapperCol: {
		xs: {
			span: 24
		},
		sm: {
			span: 16
		}
	}
};
const tailFormItemLayout = {
	wrapperCol: {
		xs: {
			span: 24,
			offset: 0
		},
		sm: {
			span: 16,
			offset: 8
		}
	}
};

export default function Signup() {
	const [ form ] = Form.useForm();
	const router = useRouter();

	const { state, dispatch } = useContext(DataContext);
	const { auth } = state;
	const [ isSubmitting, setIsSubmitting ] = useState(false);

	const onFinish = async (values) => {
		console.log('Received values of form: ', values);
		try {
			const res = await postData('auth/signup', values);
			setIsSubmitting(true);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(
		() => {
			if (isSubmitting) {
				if (Object.keys(auth).length !== 0) router.push('/login');
			} else {
				setIsSubmitting(false);
			}
		},
		[ auth ]
	);

	const prefixSelector = (
		<Form.Item name="prefix" noStyle>
			<Select
				style={{
					width: 120
				}}
			>
				<Option value="1 (US)">+1 (US)</Option>
				<Option value="1 (CAN)">+1 (CAN)</Option>
			</Select>
		</Form.Item>
	);

	return (
		<React.Fragment>
			<Head>
				<title>Billow</title>
				<link rel="icon" href="/logo.ico" />
			</Head>
			<PageHeader />
			{isSubmitting ? (
				<Loader active inline="centered" />
			) : (
				<Form
					{...formItemLayout}
					form={form}
					name="register"
					onFinish={onFinish}
					initialValues={{
						location: 'Seattle, WA',
						prefix: '1 (US)'
					}}
					scrollToFirstError
				>
					<Form.Item
						name="email"
						label="邮箱地址"
						rules={[
							{
								type: 'email',
								message: '请输入正确的邮箱地址'
							},
							{
								required: true,
								message: '请输入您的邮箱地址'
							}
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						name="password"
						label="密码"
						rules={[
							{
								required: true,
								message: '请输入您的密码'
							}
						]}
						hasFeedback
					>
						<Input.Password />
					</Form.Item>

					<Form.Item
						name="confirm"
						label="确认密码"
						dependencies={[ 'password' ]}
						hasFeedback
						rules={[
							{
								required: true,
								message: '请确认您的密码'
							},
							({ getFieldValue }) => ({
								validator(_, value) {
									if (!value || getFieldValue('password') === value) {
										return Promise.resolve();
									}
									return Promise.reject('两次输入的密码不一致');
								}
							})
						]}
					>
						<Input.Password />
					</Form.Item>

					<Form.Item
						name="userName"
						label="用户名"
						rules={[
							{
								required: true,
								message: '请输入您的用户名',
								whitespace: false
							}
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						name="location"
						label="所在地区"
						rules={[
							{
								required: false,
								whitespace: true
							}
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						name="phone"
						label="手机号码"
						rules={[
							{
								required: false
							}
						]}
					>
						<Input
							addonBefore={prefixSelector}
							style={{
								width: '100%'
							}}
						/>
					</Form.Item>

					<Form.Item
						name="agreement"
						valuePropName="checked"
						rules={[
							{
								validator: (_, value) => (value ? Promise.resolve() : Promise.reject('请确认用户条款'))
							}
						]}
						{...tailFormItemLayout}
					>
						<Checkbox>
							我已阅读并同意{' '}
							<a href="/" target="_blank">
								用户条款
							</a>
						</Checkbox>
					</Form.Item>

					<Form.Item {...tailFormItemLayout}>
						<Button type="primary" htmlType="submit">
							确认注册
						</Button>
					</Form.Item>
				</Form>
			)}
		</React.Fragment>
	);
}
