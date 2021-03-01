/*
 * @Author: Jinqi Li
 * @Date: 2021-02-28 13:22:40
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-28 16:54:39
 * @FilePath: /billow-website/lib/api-helpers.js
 */
const sensitiveFields = [ 'email', 'emailVerified', 'password' ];
export function extractUser(user) {
	if (!user) return null;
	const obj = {};
	Object.keys(user).forEach((key) => {
		if (!sensitiveFields.includes(key)) obj[key] = user[key];
	});
	return obj;
}
