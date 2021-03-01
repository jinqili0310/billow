/*
 * @Author: Jinqi Li
 * @Date: 2021-02-28 17:28:00
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-28 17:54:32
 * @FilePath: /billow-website/pages/api/posts/index.js
 */
import nc from 'next-connect';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import { all } from '../../../middlewares/index';
import { getPosts, insertPost } from '../../../db/index';

const handler = nc();
handler.use(all);

/* eslint-disable camelcase */
const {
  hostname: cloud_name,
  username: api_key,
  password: api_secret,
} = new URL(process.env.CLOUDINARY_URL);

cloudinary.config({
  cloud_name,
  api_key,
  api_secret,
});

// const ALLOWED_FORMATS = ['image/jpeg', 'image/png', 'image/jpg'];

// const storage = multer.memoryStorage();
// const upload = multer({
//   storage,
//   fileFilter: function(req, file, cb) {
//     if (ALLOWED_FORMATS.includes(file.mimetype)) {
//       cb(null, true);
//     } else {
//       cb(new Error('Not supported file type! Please upload jp(e)g or png.'), false);
//     }
//   }
// })

// const singleUpload = upload.single('image');
// const singleUploadCtrl = (req, res, next) => {
//   singleUpload(req, res, (error) => {
//     if (error) {
//       return res.status(422).send({message: 'Image upload fail!'});
//     }

//     next();
//   })

const maxAge = 1 * 24 * 60 * 60;

handler.get(async (req, res) => {
  const posts = await getPosts(
    req.db,
    req.query.from ? new Date(req.query.from) : undefined,
    req.query.by,
    req.query.limit ? parseInt(req.query.limit, 10) : undefined,
  );

  if (req.query.from && posts.length > 0) {
    // This is safe to cache because from defines
    //  a concrete range of posts
    res.setHeader('cache-control', `public, max-age=${maxAge}`);
  }

  res.send({ posts });
});

handler.post(async (req, res) => {
  if (!req.user) {
    return res.status(401).send('unauthenticated');
  }

  if (!req.body.content) return res.status(400).send('You must write something');

  const post = await insertPost(req.db, {
    content: req.body.content,
    creatorId: req.user._id,
  });

  return res.json({ post });
});

export default handler;