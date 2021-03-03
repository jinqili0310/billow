/*
 * @Author: Jinqi Li
 * @Date: 2021-03-02 22:33:32
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-03-02 22:33:32
 * @FilePath: /billow-website/utils/imageUpload.js
 */
export const imageUpload = async (images) => {
	let imgArr = [];
	for (const item of images) {
		const formData = new FormData();
		formData.append('file', item);

		const res = await fetch(process.env.CLOUD_API, {
			method: 'POST',
			body: formData
		});

		const data = await res.json();

		imgArr.push({ public_id: data.public_id, url: data.secure_url });
	}
	return imgArr;
};