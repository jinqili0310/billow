/*
 * @Author: Jinqi Li
 * @Date: 2021-02-28 13:11:09
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-28 17:20:02
 * @FilePath: /billow-website/middlewares/session.js
 */
import session from 'express-session';
import connectMongo from 'connect-mongo';

const MongoStore = connectMongo(session);

export default function sessionMiddleware(req, res, next) {
	const mongoStore = new MongoStore({
		client: req.dbClient,
		stringify: false,
	  });
	return session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: false,
		store: mongoStore
	})(req, res, next);
}
