import React from 'react'
import { useSearchParams, useLocation } from 'react-router-dom';

export default function HomeMessageDetail(props) {
  const [search, setSearch] = useSearchParams();
  const id = search.get('id');
  const title = search.get('title');
  const content = search.get('content');
  console.log(useLocation());
  return (
    <ul>
      <li><button onClick={() => setSearch('id=008&title=更新&content=已经更新了')}>点我更新一下search参数</button></li>
      <li>{id}</li>
      <li>{title}</li>
      <li>{content}</li>
    </ul>
  )
}
