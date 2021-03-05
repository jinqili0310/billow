/*
 * @Author: Jinqi Li
 * @Date: 2021-02-03 22:18:56
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-03-04 16:54:48
 * @FilePath: \billow\next.config.js
 */
require('dotenv').config();

module.exports = {
	webpack: (config, { dev }) => {
		config.node = {
			fs: 'empty',
			net: 'empty',
			tls: 'empty'
		};
		config.module.rules.push(
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: 'babel-loader'
					},
					{
						loader: '@svgr/webpack',
						options: {
							babel: false,
							icon: true
						}
					}
				]
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				loader: 'file-loader'
			},
			{
				test: /\.(png|jpg|gif)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: false
						}
					}
				]
			}
		);

		return config;
	},

	env: {
		MONGO_URI: process.env.MONGO_URI,
		CLOUDINARY_URL: process.env.CLOUDINARY_URL,
		DB_NAME: process.env.DB_NAME,
		WEB_URI: process.env.WEB_URI,
		SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
		EMAIL_FROM: process.env.EMAIL_FROM,
		SESSION_SECRET: process.env.SESSION_SECRET
	}
};
