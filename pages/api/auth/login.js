/*
 * @Author: Jinqi Li
 * @Date: 2021-02-13 09:37:47
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-13 09:42:13
 * @FilePath: /billow-website/pages/api/auth/login.js
 */
import dbConnect from '../../../utils/dbConnect';
import User from '../../../models/User';
import bcrypt from 'bcrypt';
import { createAccessToken, createRefreshToken } from '../../../utils/generateToken';

dbConnect();

export default async (req, res) => {
	switch (req.method) {
		case 'POST':
			await login(req, res);
			break;
	}
};

const login = async (req, res) => {
	try {
		const { email, password } = req.body;

		const user = await User.findOne({ email });
		if (!user) return res.status(400).json({ err: '用户不存在' });

		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) return res.status(400).json({ err: '密码错误' });

		const access_token = createAccessToken({ id: user._id });
		const refresh_token = createRefreshToken({ id: user._id });

		res.json({
			msg: '登录成功',
			refresh_token,
			access_token,
			user: {
				username: user.username,
				email: user.email,
				role: user.role
			}
		});
	} catch (err) {
		return res.status(500).json({ err: err.message });
	}
};
