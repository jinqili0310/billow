/*
 * @Author: Jinqi Li
 * @Date: 2021-02-28 14:42:20
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-28 14:42:20
 * @FilePath: /billow-website/lib/fetch.js
 */
export default function fetcher(url) { return fetch(url).then((r) => r.json()); }