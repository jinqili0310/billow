/*
 * @Author: Jinqi Li
 * @Date: 2021-03-02 22:42:54
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-03-04 10:42:36
 * @FilePath: \billow\models\Post.js
 */
const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true
		},
		userId: {
			type: String,
			required: true
		},
		title: {
			type: String,
			required: true
		},
		tag: {
			type: String,
			required: true
		},
		description: {
			type: String
		},
		images: {
			type: Array
		},
		body: {
			type: String
		},
		content: {
			type: String,
			required: true
		},
		comments: {
			type: Array
		}
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.models.Post || mongoose.model('Post', PostSchema);
