import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";


export default function HomeMessage() {
  const [messages] = useState([
    { id: '001', title: '消息1', content: '锄禾日当午' },
    { id: '002', title: '消息2', content: '汗滴禾下土' },
    { id: '003', title: '消息3', content: '谁知盘中餐' },
    { id: '004', title: '消息4', content: '粒粒皆辛苦' },
  ])

  return (
    <div>
      <ul>
        {
          messages.map(e => (
            <li key={e.id}>
              <Link to='detail' state={{id: e.id, title: e.title, content: e.content}} >{e.title}</Link>
            </li>
          ))
        }
      </ul>
      <hr />
      {/* 指定路由组件展示的位置 */}
      <Outlet />
    </div>
  );
}
