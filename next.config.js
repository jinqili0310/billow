/*
 * @Author: Jinqi Li
 * @Date: 2021-02-03 22:18:56
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-09 00:02:19
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
	}
};
