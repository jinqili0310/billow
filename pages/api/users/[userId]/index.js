/*
 * @Author: Jinqi Li
 * @Date: 2021-02-28 16:33:26
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-28 16:36:19
 * @FilePath: /billow-website/pages/api/users/[userId]/index.js
 */
import nc from 'next-connect';
import { all } from '../../../../middlewares/index';
import { findUserById } from '../../../../db/index';
import { extractUser } from '../../../../lib/api-helpers';

const handler = nc();

handler.use(all);

const maxAge = 4 * 60 * 60; // 4 hours

handler.get(async (req, res) => {
  const user = extractUser(await findUserById(req.db, req.query.userId));
  if (user) res.setHeader('cache-control', `public, max-age=${maxAge}`);
  res.send({ user });
});

export default handler;