import React from "react";
import { useNavigationType, useResolvedPath } from "react-router-dom";

// type NavigationType = "POP" | "PUSH" | "REPLACE";
// POP: 刷新页面，或者直接浏览器打开这个路由组件
export default function HomeNews() {
  console.log(useNavigationType());
  console.log(useResolvedPath('/home?id=1&title=你好#top'));
  return (
    <ul>
      <li>news001</li>
      <li>news002</li>
      <li>news003</li>
    </ul>
  );
}
