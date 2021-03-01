/*
 * @Author: Jinqi Li
 * @Date: 2021-02-28 13:29:33
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-28 16:34:41
 * @FilePath: /billow-website/pages/api/auth.js
 */
import nc from 'next-connect';
import { all } from '../../middlewares/index';
import passport from '../../middlewares/passport';
import { extractUser } from '../../lib/api-helpers';

const handler = nc();

handler.use(all);

handler.post(passport.authenticate('local'), (req, res) => {
  res.json({ user: extractUser(req.user) });
});

handler.delete((req, res) => {
  req.logOut();
  res.status(204).end();
});

export default handler;