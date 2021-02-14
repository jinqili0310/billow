/*
 * @Author: Jinqi Li
 * @Date: 2021-02-13 10:34:32
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-13 19:09:28
 * @FilePath: /billow-website/pages/api/auth/accessToken.js
 */
import dbConnect from '../../../utils/dbConnect';
import User from '../../../models/User';
import jwt from 'jsonwebtoken';
import { createAccessToken } from '../../../utils/generateToken';

dbConnect();

export default async (req, res) => {
	try {
		const rf_token = req.cookies.refreshtoken;
		if (!rf_token) return res.status(400).json({ err: '请登录' });

		const result = jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET);
		if (!result) return res.status(400).json({ err: '登录已过期' });

		const user = await User.findById(result.id);
		if (!user) return res.status(400).json({ err: '用户不存在' });

		const access_token = createAccessToken({ id: user._id });
		res.json({
			access_token,
			user: {
				email: user.email
			}
		});
	} catch (err) {
		return res.status(500).json({ err: err.message });
	}
};
