/*
 * @Author: Jinqi Li
 * @Date: 2021-02-03 22:18:56
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-28 13:14:50
 * @FilePath: /billow-website/next.config.js
 */
require('dotenv').config();

module.exports = {
	webpack: (config, { dev }) => {
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
		MONGODB_URI: process.env.MONGODB_URI,
		CLOUDINARY_URL: process.env.CLOUDINARY_URL,
		DB_NAME: process.env.DB_NAME,
		WEB_URI: process.env.WEB_URI,
		SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
		EMAIL_FROM: process.env.EMAIL_FROM,
		SESSION_SECRET: process.env.SESSION_SECRET
	}
};
