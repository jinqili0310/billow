/*
 * @Author: Jinqi Li
 * @Date: 2021-02-13 10:01:06
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-13 11:46:03
 * @FilePath: /billow-website/store/globalState.js
 */
import React, { createContext, useReducer, useEffect } from 'react';
import reducers from './Reducers';
import { getData } from '../utils/fetchData';

const defaultState = {
	notify: {},
	auth: {},
	cart: [],
	modal: [],
	orders: [],
	users: [],
	categories: []
};

export const DataContext = createContext(defaultState);

export const DataProvider = ({ children }) => {
	const initialState = {
		notify: {},
		auth: {},
		cart: [],
		modal: [],
		orders: [],
		users: [],
		categories: []
	};

	const [ state, dispatch ] = useReducer(reducers, initialState);
	const { cart, auth } = state;

	useEffect(() => {
		const firstLogin = localStorage.getItem('firstLogin');
		if (firstLogin) {
			getData('auth/accessToken').then((res) => {
				if (res.err) return localStorage.removeItem('firstLogin');
				dispatch({
					type: 'AUTH',
					payload: {
						token: res.access_token,
						user: res.user
					}
				});
			});
		}

		getData('categories').then((res) => {
			if (res.err) return dispatch({ type: 'NOTIFY', payload: { error: res.err } });

			dispatch({
				type: 'ADD_CATEGORIES',
				payload: res.categories
			});
		});
	}, []);

	useEffect(() => {
		const __next__cart01__devat = JSON.parse(localStorage.getItem('__next__cart01__devat'));

		if (__next__cart01__devat) dispatch({ type: 'ADD_CART', payload: __next__cart01__devat });
	}, []);

	useEffect(
		() => {
			localStorage.setItem('__next__cart01__devat', JSON.stringify(cart));
		},
		[ cart ]
	);

	useEffect(
		() => {
			if (auth.token) {
				getData('order', auth.token).then((res) => {
					if (res.err) return dispatch({ type: 'NOTIFY', payload: { error: res.err } });

					dispatch({ type: 'ADD_ORDERS', payload: res.orders });
				});

				if (auth.user.role === 'admin') {
					getData('user', auth.token).then((res) => {
						if (res.err) return dispatch({ type: 'NOTIFY', payload: { error: res.err } });

						dispatch({ type: 'ADD_USERS', payload: res.users });
					});
				}
			} else {
				dispatch({ type: 'ADD_ORDERS', payload: [] });
				dispatch({ type: 'ADD_USERS', payload: [] });
			}
		},
		[ auth.token ]
	);

	return <DataContext.Provider value={{ state, dispatch }}>{children}</DataContext.Provider>;
};
