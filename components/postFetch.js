/*
 * @Author: Jinqi Li
 * @Date: 2021-02-11 14:29:30
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-11 16:06:38
 * @FilePath: /billow-website/components/postFetch.js
 */
import React from 'react';
// import fetch from 'isomorphic-unfetch';
import 'antd/dist/antd.css';
import { Card } from 'antd';

const PostFetch = ({ posts }) => {
	return (
		<div className="fetch-post">
            {posts.map(post => {
                return (
                    <div key={post._id}>
                        <Card
                            style={{ marginTop: 16 }}
                            type="inner"
                            title={post.title}
                            extra={<a href={`../${post._id}`}>More</a>}
                            >
                            {post.discription}
                        </Card>
                    </div>
                )
            })}
		</div>
	);
}

PostFetch.getInitialProps = async () => {
	const res = await fetch('http://localhost:3000/api/posts');
	const { data } = await res.json();
    console.log(data)
	return { posts: data };
};

export default PostFetch;