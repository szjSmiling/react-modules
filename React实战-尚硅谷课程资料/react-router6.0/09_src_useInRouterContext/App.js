import React from 'react'
import { NavLink, useRoutes, useInRouterContext } from 'react-router-dom'
import routes from './routes/index'
import Header from './components/Header'


export const Demo = function() {
  return (
    <h1>Demo</h1>
  )
}

export default function App() {
  console.log('@@@', useInRouterContext());
  // 根据路由表生成路由
  const routeList = useRoutes(routes)
  return (
    <div>
      <div className="row">
        <Header />
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            {/* 原生html中，靠<a>跳转不同的页面 */}
            {/* <a className="list-group-item" href="./about.html">About</a>
            <a className="list-group-item active" href="./home.html">Home</a> */}

            {/* 在React中靠 路由链接 实现切换组件--编写路由链接 */}
            <NavLink className="list-group-item" to="/about">About</NavLink>
            <NavLink className="list-group-item" end to="/home">Home</NavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* 注册路由, Routes包裹，匹配到以后不会继续向下匹配 */}
                {routeList}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
