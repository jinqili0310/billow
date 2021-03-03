/*
 * @Author: Jinqi Li
 * @Date: 2021-02-28 16:07:45
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-03-02 10:31:33
 * @FilePath: \billow\components\posts.js
 */
import React from 'react';
import { useSWRInfinite } from 'swr';
import Link from 'next/link';
import { useUser } from '../hooks/index';
import fetcher from '../lib/fetch';
import { defaultProfilePicture } from '../lib/default';
import {Button, Card} from 'antd'

function Post({ post }) {
  
  const user = useUser(post.creatorId);
  
  return (
    <React.Fragment>
      <div>
        {user && (
          <Link href={`/user/${user._id}`}>
            <a style={{ display: 'inline-flex', alignItems: 'center' }}>
              <img width="27" height="27" style={{ borderRadius: '50%', objectFit: 'cover', marginRight: '0.3rem' }} src={user.profilePicture || defaultProfilePicture(user._id)} alt={user.username} />
              <b>{user.username}</b>
            </a>
          </Link>
        )}
       <div key={post._id}>
            <a href={`../${post._id}`}>
                <Card style={{ marginTop: 6 }} type="inner" title={post.title}>
                    {post.discription}
                </Card>
            </a>
        </div>
        {/* <small>{new Date(post.createdAt).toLocaleString()}</small> */}
      </div>
    </React.Fragment>
  );
}

const PAGE_SIZE = 10;

export function usePostPages({ creatorId } = {}) {
  return useSWRInfinite((index, previousPageData) => {
    // reached the end
    if (previousPageData && previousPageData.posts.length === 0) return null;

    // first page, previousPageData is null
    if (index === 0) {
      return `/api/posts?limit=${PAGE_SIZE}${
        creatorId ? `&by=${creatorId}` : ''
      }`;
    }

    // using oldest posts createdAt date as cursor
    // We want to fetch posts which has a datethat is
    // before (hence the .getTime() - 1) the last post's createdAt
    const from = new Date(
      new Date(
        previousPageData.posts[previousPageData.posts.length - 1].createdAt,
      ).getTime() - 1,
    ).toJSON();

    return `/api/posts?from=${from}&limit=${PAGE_SIZE}${
      creatorId ? `&by=${creatorId}` : ''
    }`;
  }, fetcher, {
    refreshInterval: 10000, // Refresh every 10 seconds
  });
}

export default function Posts({ creatorId }) {
  const {
    data, error, size, setSize,
  } = usePostPages({ creatorId });

  const posts = data ? data.reduce((acc, val) => [...acc, ...val.posts], []) : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore = isLoadingInitialData || (data && typeof data[size - 1] === 'undefined');
  const isEmpty = data?.[0].posts?.length === 0;
  const isReachingEnd = isEmpty || (data && data[data.length - 1]?.posts.length < PAGE_SIZE);

  return (
    <div>
      {posts.map((post) => <Post key={post._id} post={post} />)}
      {!isReachingEnd && (
      <Button
        shape="round"
        onClick={() => setSize(size + 1)}
        disabled={isReachingEnd || isLoadingMore}
      >
        {isLoadingMore ? '. . .' : 'load more'}
      </Button>
      )}
    </div>
  );
}
