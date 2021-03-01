/*
 * @Author: Jinqi Li
 * @Date: 2021-02-28 14:49:50
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-28 14:50:10
 * @FilePath: /billow-website/db/user.js
 */
import { nanoid } from 'nanoid';
import normalizeEmail from 'validator/lib/normalizeEmail';

export async function findUserById(db, userId) {
  return db.collection('users').findOne({
    _id: userId,
  }).then((user) => user || null);
}

export async function findUserByEmail(db, email) {
  email = normalizeEmail(email);
  return db.collection('users').findOne({
    email,
  }).then((user) => user || null);
}

export async function updateUserById(db, id, update) {
  return db.collection('users').findOneAndUpdate(
    { _id: id },
    { $set: update },
    { returnOriginal: false },
  ).then(({ value }) => value);
}

export async function insertUser(db, {
  email, password, bio = '', username, profilePicture,
}) {
  return db
    .collection('users')
    .insertOne({
      _id: nanoid(12),
      emailVerified: false,
      profilePicture,
      email,
      password,
      username,
      bio,
    })
    .then(({ ops }) => ops[0]);
}