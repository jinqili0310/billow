/*
 * @Author: Jinqi Li
 * @Date: 2021-02-13 10:23:55
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-13 11:44:24
 * @FilePath: /billow-website/middleware/auth.js
 */
import jwt from 'jsonwebtoken';
import User from '../models/User';

const auth = async (req, res) => {
	const token = req.headers.authorization;
	if (!token) return res.status(400).json({ err: 'Invalid Authentication.' });

	const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
	if (!decoded) return res.status(400).json({ err: 'Invalid Authentication.' });

	const user = await User.findOne({ _id: decoded.id });

	return { id: user._id, role: user.role };
};

export default auth;
