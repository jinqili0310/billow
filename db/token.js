/*
 * @Author: Jinqi Li
 * @Date: 2021-02-28 14:50:23
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-28 14:50:24
 * @FilePath: /billow-website/db/token.js
 */
import { nanoid } from 'nanoid';

export function findTokenByIdAndType(db, id, type) {
  return db.collection('tokens').findOne({
    _id: id,
    type,
  });
}

export function findAndDeleteTokenByIdAndType(db, id, type) {
  return db
    .collection('tokens')
    .findOneAndDelete({ _id: id, type }).then(({ value }) => value);
}

export function insertToken(db, { creatorId, type, expireAt }) {
  const securedTokenId = nanoid(32);
  return db.collection('tokens').insertOne({
    _id: securedTokenId,
    creatorId,
    type,
    expireAt,
  }).then(({ ops }) => ops[0]);
}