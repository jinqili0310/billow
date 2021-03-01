/*
 * @Author: Jinqi Li
 * @Date: 2021-02-28 14:33:53
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-28 14:34:30
 * @FilePath: /billow-website/pages/api/session.js
 */
const { username, email, bio, profilePicture, emailVerified } = req.user;
return res.json({
  data: {
    isLoggedIn: true,
    user: {
      username,
      email,
      bio,
      profilePicture,
      emailVerified
    }
  }
});