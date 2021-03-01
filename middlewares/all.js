/*
 * @Author: Jinqi Li
 * @Date: 2021-02-28 14:47:27
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-28 16:59:52
 * @FilePath: /billow-website/middlewares/all.js
 */
import nc from 'next-connect';
import passport from './passport';
import database from './database';
import session from './session';

const all = nc();

all.use(database).use(session).use(passport.initialize()).use(passport.session());

export default all;