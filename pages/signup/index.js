/*
 * @Author: Jinqi Li
 * @Date: 2021-02-04 01:10:27
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-10 04:57:21
 * @FilePath: /billow-website/pages/signup/index.js
 */
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Tooltip, Select, Checkbox, Button, Modal } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import PageHeader from '../../components/pageHeader';

const { displayRender } = Input;

export default function Signup() {
	// form
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

	const [ form ] = Form.useForm();

	const onFinish = (values) => {
		console.log('Received values of form: ', values);
	};

	const prefixSelector = (
		<Form.Item name="prefix" noStyle>
			<Select
				style={{
					width: 100
				}}
			>
				<Option value="1 (US)">+1 (US)</Option>
				<Option value="1 (CAN)">+1 (CAN)</Option>
			</Select>
		</Form.Item>
	);

	// modal
	const [ isModalVisible, setIsModalVisible ] = useState(false);
	const [ checked, setChecked ] = useState(false);

	const onChangeCheck = (e) => {
		console.log('checked = ', e.target.checked);
		setChecked(e.target.checked);
	};

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleOk = () => {
		setChecked(true);
		setIsModalVisible(false);
	};

	return (
		<React.Fragment>
			<PageHeader />
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
				label="E-mail"
				rules={[
					{
						type: 'email',
						message: 'The input is not valid E-mail!'
					},
					{
						required: true,
						message: 'Please input your E-mail!'
					}
				]}
			>
				<Input displayRender={(label) => label} />
			</Form.Item>

			<Form.Item
				name="password"
				label="Password"
				rules={[
					{
						required: true,
						message: 'Please input your password!'
					}
				]}
				hasFeedback
			>
				<Input.Password displayRender={(label) => label} />
			</Form.Item>

			<Form.Item
				name="confirm"
				label="Confirm Password"
				dependencies={[ 'password' ]}
				hasFeedback
				rules={[
					{
						required: true,
						message: 'Please confirm your password!'
					},
					({ getFieldValue }) => ({
						validator(_, value) {
							if (!value || getFieldValue('password') === value) {
								return Promise.resolve();
							}

							return Promise.reject('The two passwords that you entered do not match!');
						}
					})
				]}
			>
				<Input.Password displayRender={(label) => label} />
			</Form.Item>

			<Form.Item
				name="username"
				label={
					<span>
						Username&nbsp;
						<Tooltip title="What do you want others to call you?">
							<QuestionCircleOutlined />
						</Tooltip>
					</span>
				}
				rules={[
					{
						required: true,
						message: 'Please input your username!',
						whitespace: true
					}
				]}
			>
				<Input displayRender={(label) => label} />
			</Form.Item>

			<Form.Item
				name="location"
				label="Location"
				rules={[
					{
						required: false,
						message: 'Please input your location!',
						whitespace: true
					}
				]}
			>
				<Input displayRender={(label) => label} />
			</Form.Item>

			<Form.Item
				name="phone"
				label="Phone Number"
				rules={[
					{
						required: false,
						message: 'Please input your phone number!'
					}
				]}
			>
				<Input
					addonBefore={prefixSelector}
					style={{
						width: '100%'
					}}
					displayRender={(label) => label}
				/>
			</Form.Item>

			{/* TODO
            短信验证 */}
			{/* <Form.Item label="Captcha" extra="We must make sure that your are a human.">
				<Row gutter={8}>
					<Col span={12}>
						<Form.Item
							name="captcha"
							noStyle
							rules={[
								{
									required: true,
									message: 'Please input the captcha you got!'
								}
							]}
						>
							<Input />
						</Form.Item>
					</Col>
					<Col span={12}>
						<Button>Get captcha</Button>
					</Col>
				</Row>
			</Form.Item> */}

			<Form.Item
				name="agreement"
				valuePropName="checked"
				rules={[
					{
						validator: (_, value) => (value ? Promise.resolve() : Promise.reject('Should accept agreement'))
					}
				]}
				{...tailFormItemLayout}
			>
				<Checkbox checked={checked} onChange={onChangeCheck}>
					I have read the
					<Button onClick={showModal}>
						agreement
					</Button>
				</Checkbox>
				<Modal title="User Agreement" visible={isModalVisible}>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<Button type="primary" onClick={handleOk}>
						Confirm
					</Button>
				</Modal>
			</Form.Item>

			<Form.Item {...tailFormItemLayout}>
				<Button type="primary" htmlType="submit">
					Register
				</Button>
			</Form.Item>
		</Form>
		</React.Fragment>
	);
}
