/*
 * @Author: Jinqi Li
 * @Date: 2021-02-03 22:18:56
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-13 09:47:44
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
			'mongodb+srv://billow-admin:n2UXAYnz3i0OMUyY@clusterbillow.zl3li.mongodb.net/postDB?retryWrites=true&w=majority',
		CLOUD_API: 'https://v1.nocodeapi.com/jinqili/cloudinary/ihYCGJsCpaNHyPfy',
		ACCESS_TOKEN_SECRET: 'C@n34$E4fK%J%kQ_Wk9FEn#N&@+XmxPZrSs8sCATQ_YYs*933Y',
		REFRESH_TOKEN_SECRET: '3==HYx9ZZQQ#v!UYNDKtD!etpk8CnRCS^bnh$gjm7fZ7F-WwNv'
	}
};
