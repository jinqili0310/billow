/*
 * @Author: Jinqi Li
 * @Date: 2021-02-13 05:52:18
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-13 17:16:46
 * @FilePath: /billow-website/utils/fetchData.js
 */
import { server } from '../config/index';

export const getData = async (url, token) => {
	const res = await fetch(`${server}/api/${url}`, {
		method: 'GET',
		headers: {
			Authorization: token
		}
	});

	const data = await res.json();
	return data;
};

export const postData = async (url, post, token) => {
	const res = await fetch(`${server}/api/${url}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: token
		},
		body: JSON.stringify(post)
	});

	const data = await res.json();
	console.log(data)
	return data;
};

export const putData = async (url, post, token) => {
	const res = await fetch(`${server}/api/${url}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			Authorization: token
		},
		body: JSON.stringify(post)
	});

	const data = await res.json();
	return data;
};

export const patchData = async (url, post, token) => {
	const res = await fetch(`${server}/api/${url}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
			Authorization: token
		},
		body: JSON.stringify(post)
	});

	const data = await res.json();
	return data;
};

export const deleteData = async (url, token) => {
	const res = await fetch(`${server}/api/${url}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			Authorization: token
		}
	});

	const data = await res.json();
	return data;
};
