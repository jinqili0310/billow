/*
 * @Author: Jinqi Li
 * @Date: 2021-02-11 09:53:06
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-11 09:56:29
 * @FilePath: /billow-website/pages/api/posts/index.js
 */
import dbConnect from '../../../utils/dbConnect';
import Post from '../../../models/Post';

dbConnect();

export default async (req, res) => {
	const { method } = req;

	switch (method) {
		case 'GET':
			try {
				const posts = await Post.find({});

				res.status(200).json({ success: true, data: posts });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		case 'POST':
			try {
				const post = await Post.create(req.body);

				res.status(201).json({ success: true, data: post });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		default:
			res.status(400).json({ success: false });
			break;
	}
};
