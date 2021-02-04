/*
 * @Author: Jinqi Li
 * @Date: 2021-02-03 22:18:56
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-03 22:21:32
 * @FilePath: /billow-website/next.config.js
 */
module.exports = {
	webpack: (config, options) => {
		config.module.rules.push({
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
		});

		return config;
	}
};
