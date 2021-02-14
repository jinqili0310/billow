/*
 * @Author: Jinqi Li
 * @Date: 2021-02-13 09:39:41
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-13 16:57:56
 * @FilePath: /billow-website/utils/generateToken.js
 */
import jwt from 'jsonwebtoken';

export const createAccessToken = (payload) => {
	return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
};

export const createRefreshToken = (payload) => {
	return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '30d' });
};
