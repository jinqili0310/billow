/*
 * @Author: Jinqi Li
 * @Date: 2021-02-13 06:49:57
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-13 16:38:49
 * @FilePath: /billow-website/pages/api/auth/signup.js
 */
import dbConnect from '../../../utils/dbConnect';
import User from '../../../models/User';
import bcrypt from 'bcrypt';

dbConnect();

export default async (req, res) => {
	switch (req.method) {
		case 'POST':
			await register(req, res);
			break;
	}
};

const register = async (req, res) => {
	try {
		const { userName, email, password, location, phone } = req.body;

		const user = await User.findOne({ email });
		if (user) return res.status(400).json({ err: '此邮箱已被注册' });

		const passwordHash = await bcrypt.hash(password, 12);

		const newUser = new User({
			userName,
			email,
			password: passwordHash,
			location,
			phone
		});

		await newUser.save();
		res.json({ msg: '注册成功' });
	} catch (err) {
		return res.status(500).json({ err: err.message });
	}
};
