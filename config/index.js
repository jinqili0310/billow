/*
 * @Author: Jinqi Li
 * @Date: 2021-02-11 16:16:43
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-08-20 19:15:35
 * @FilePath: /billow/config/index.js
 */
const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:3000' : 'https://billow-gilt.vercel.app';