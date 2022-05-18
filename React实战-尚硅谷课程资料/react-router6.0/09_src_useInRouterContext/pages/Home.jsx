import React from "react";
import { NavLink, Outlet } from 'react-router-dom'


export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <ul className="nav nav-tabs">
          <li>
            <NavLink className="list-group-item" to="news">News</NavLink>
          </li>
          <li>
            <NavLink className="list-group-item" to="message">Message</NavLink>
          </li>
        </ul>
        {/* 指定路由组件展示的位置 */}
        <h4>
          <Outlet />
        </h4>
      </div>
    </div>
  );
}
