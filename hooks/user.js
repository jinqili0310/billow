/*
 * @Author: Jinqi Li
 * @Date: 2021-02-28 14:41:31
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-02-28 14:58:14
 * @FilePath: /billow-website/hooks/user.js
 */
import useSWR from 'swr';
import fetcher from '../lib/fetch';

export function useCurrentUser() {
  const { data, mutate } = useSWR('/api/user', fetcher);
  const user = data?.user;
  return [user, { mutate }];
}

export function useUser(id) {
  const { data } = useSWR(`/api/users/${id}`, fetcher, { revalidateOnFocus: false });
  return data?.user;
}