/*
 * @Author: Jinqi Li
 * @Date: 2021-02-10 15:46:25
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-13 13:48:07
 * @FilePath: /billow-website/models/Post.js
 */
const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
	{
		userName: {
			type: String,
			required: false
		},
		userId: {
			type: String,
			required: false
		},
		title: {
			type: String,
			required: [ true, '请输入标题' ],
			unique: [ true, '此标题已存在' ],
			maxlength: [ 40, '请输入最多40个字符' ]
		},
		tag: {
			type: String,
			required: [ true, '请选择发布版块' ]
		},
		description: {
			type: String,
			maxlength: [ 100, '请输入最多100个字符' ]
		},
		images: {
			type: Array
		},
		body: {
			type: String,
			required: [ true, '请输入正文' ]
		}
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.models.Post || mongoose.model('Post', PostSchema);
