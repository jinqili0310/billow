/*
 * @Author: Jinqi Li
 * @Date: 2021-02-04 15:17:58
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-09 01:59:00
 * @FilePath: /billow-website/pages/show/index.js
 */
import React from 'react';
import 'antd/dist/antd.css';
import PageHeader from '../../components/pageHeader';
import AreaIntro from '../../components/areaIntro';
import PostList from '../../components/postList';
import Caiyi from '../../public/caiyi.svg';
import fetch from 'isomorphic-unfetch';
import { server } from '../../config';
import { Card } from 'antd';

const TalentShow =({posts}) => {
	return (
		<div>
			<PageHeader />
			<AreaIntro icon={Caiyi} title="戏精才艺展示" />
			
			<div className="fetch-post">
				{posts.filter(post => post.tag === "talentShow")
				.map((post) => {
					return (
						<div key={post._id}>
							<a href={`../api/posts/${post._id}`}>
								<Card
									style={{ marginTop: 6 }}
									type="inner"
									title={post.title}
								>
									{post.discription}
								</Card>
							</a>
						</div>
					);
				})}
			</div>

		</div>
	);
}

TalentShow.getInitialProps = async () => {
	const res = await fetch(`${server}/api/posts`);
	const { data } = await res.json();
	return { posts: data };
};

export default TalentShow;