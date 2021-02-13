/*
 * @Author: Jinqi Li
 * @Date: 2021-02-13 05:44:44
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-13 08:50:47
 * @FilePath: /billow-website/models/User.js
 */
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true
		},
		email: {
			type: String,
			required: true,
			unique: true
		},
		password: {
			type: String,
			required: true
		},
		confirm: {
			type: String
		},
		location: {
			type: String,
			required: false
		},
		phone: {
			type: String,
			required: false
		},
		role: {
			type: String,
			default: 'user'
		}
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);
