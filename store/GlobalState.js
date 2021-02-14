/*
 * @Author: Jinqi Li
 * @Date: 2021-02-13 10:01:06
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-13 17:10:55
 * @FilePath: /billow-website/store/globalState.js
 */
import React, { createContext, useReducer, useEffect } from 'react';
import reducers from './Reducers';
import { getData } from '../utils/fetchData';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
	const initialState = {
		notify: {},
		auth: {},
		cart: [],
		modal: [],
		orders: [],
		user: [],
		categories: []
	};

	const [ state, dispatch ] = useReducer(reducers, initialState);
	const { cart, auth } = state;

	useEffect(() => {
		const firstLogin = localStorage.getItem('firstLogin');
		if (firstLogin) {
			getData('auth/accessToken').then((res) => {
				if (res.err) {
					console.log(res.err, res.access_token, res)
					return localStorage.removeItem('firstLogin');
				}
				dispatch({
					type: 'AUTH',
					payload: {
						token: res.access_token,
						user: res.user
					}
				});
			});
		}

	}, []);

	return <DataContext.Provider value={{ state, dispatch }}>{children}</DataContext.Provider>;
};
