/*
 * @Author: Jinqi Li
 * @Date: 2021-02-28 16:52:37
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-03-03 02:47:17
 * @FilePath: /billow-website/pages/settings/index.js
 */
import React, { useState, useEffect, useRef } from 'react';
import 'antd/dist/antd.css';
import Head from 'next/head';
import { useCurrentUser } from '../../hooks/index';
import PageHeader from '../../components/pageHeader';
import { message } from 'antd';

const ProfileSection = () => {
	const [ user, { mutate } ] = useCurrentUser();
	const [ isUpdating, setIsUpdating ] = useState(false);
	const nameRef = useRef();
	const bioRef = useRef();
	const profilePictureRef = useRef();
	const [ msg, setMsg ] = useState({ message: '', isError: false });

	useEffect(
		() => {
			nameRef.current.value = user.username;
			bioRef.current.value = user.bio;
		},
		[ user ]
	);

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (isUpdating) return;
		setIsUpdating(true);
		const formData = new FormData();
		if (profilePictureRef.current.files[0]) {
			formData.append('profilePicture', profilePictureRef.current.files[0]);
		}
		formData.append('username', nameRef.current.value);
		formData.append('bio', bioRef.current.value);
		console.log(formData);
		const res = await fetch('/api/user', {
			method: 'PATCH',
			body: formData
		});
		if (res.status === 200) {
			const userData = await res.json();
			mutate({
				user: {
					...user,
					...userData.user
				}
			});
			setMsg({ message: 'Profile updated' });
			message.success('Profile updated!');
		} else {
			setMsg({ message: await res.text(), isError: true });
		}
		setIsUpdating(false);
	};

	const handleSubmitPasswordChange = async (e) => {
		e.preventDefault();
		const body = {
			oldPassword: e.currentTarget.oldPassword.value,
			newPassword: e.currentTarget.newPassword.value
		};
		e.currentTarget.oldPassword.value = '';
		e.currentTarget.newPassword.value = '';

		const res = await fetch('/api/user/password', {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(body)
		});

		if (res.status === 200) {
			setMsg({ message: 'Password updated' });
		} else {
			setMsg({ message: await res.text(), isError: true });
		}
	};

	async function sendVerificationEmail() {
		const res = await fetch('/api/user/email/verify', {
			method: 'POST'
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
			<section className="forget-password">
				{msg.message ? (
					<p style={{ color: msg.isError ? 'red' : '#1890ff', textAlign: 'center' }}>{msg.message}</p>
				) : null}
				<form className="form-content" onSubmit={handleSubmit}>
					{!user.emailVerified ? (
						<p>
							Your email has not been verified. {/* eslint-disable-next-line */}
							<a role="button" onClick={sendVerificationEmail}>
								Send verification email
							</a>
						</p>
					) : null}
					<label htmlFor="username">
						Name
						<input
							className="my-input"
							required
							id="username"
							name="username"
							type="text"
							placeholder="Your name"
							ref={nameRef}
						/>
					</label>
					<label htmlFor="bio">
						Bio
						<textarea className="my-input" id="bio" name="bio" type="text" placeholder="Bio" ref={bioRef} />
					</label>
					<label htmlFor="avatar">
						Profile picture
						<input
							className="my-input"
							type="file"
							id="avatar"
							name="avatar"
							accept="image/png, image/jpeg, image/jpg"
							ref={profilePictureRef}
						/>
					</label>
					<button className="my-primary" disabled={isUpdating} type="submit">
						Save
					</button>
				</form>
				<form className="form-content" onSubmit={handleSubmitPasswordChange}>
					<label htmlFor="oldpassword">
						Old Password
						<input className="my-input" type="password" name="oldPassword" id="oldpassword" required />
					</label>
					<label htmlFor="newpassword">
						New Password
						<input className="my-input" type="password" name="newPassword" id="newpassword" required />
					</label>
					<button className="my-primary" type="submit">
						Change Password
					</button>
				</form>
			</section>
		</React.Fragment>
	);
};

const SettingPage = () => {
	const [ user ] = useCurrentUser();

	if (!user) {
		return <p>Please sign in</p>;
	}
	return (
		<React.Fragment>
			<ProfileSection />
		</React.Fragment>
	);
};

export default SettingPage;
