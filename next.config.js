/*
 * @Author: Jinqi Li
 * @Date: 2021-02-03 22:18:56
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-22 20:05:14
 * @FilePath: /billow-website/next.config.js
 */
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
		MONGO_URI:
			'mongodb+srv://billow-admin:dtYb62vQKJKN6Q4@clusterbillow.zl3li.mongodb.net/billowDB?retryWrites=true&w=majority',

		CLOUD_API: 'https://v1.nocodeapi.com/jinqili/cloudinary/ihYCGJsCpaNHyPfy'
	}
};
