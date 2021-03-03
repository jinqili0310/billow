/*
 * @Author: Jinqi Li
 * @Date: 2021-03-02 22:42:54
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-03-02 22:58:25
 * @FilePath: /billow-website/models/Post.js
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
			required: [ true, '请输入标题' ],
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
			type: String
		},
        content: {
            type: String,
			required: [ true, '请输入正文' ]
		}
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.models.Post || mongoose.model('Post', PostSchema);