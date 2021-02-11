/*
 * @Author: Jinqi Li
 * @Date: 1985-10-26 01:15:00
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-11 09:49:22
 * @FilePath: /billow-website/pages/api/test.js
 */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dbConnect from '../../utils/dbConnect';

dbConnect();

export default async (req, res) => {
  res.json({ test: "test"})
}
