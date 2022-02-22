import React, { Suspense, lazy } from 'react';
import './One.scss';
// const Welcome = lazy(() => import('../../components/testOne/Test'));
const Welcome = lazy(() => new Promise(resolve =>
  setTimeout(() =>
    resolve({
      default: function render() {
        return <div>Other Component</div>
      }
    }), 3000)
  )
)
const Welcome2 = lazy(() => import('../../components/testOne/Test2'));
const Welcome3 = lazy(() => import('../../components/testOne/Test3'));
const Welcome4 = lazy(() => import('../../components/testOne/Test4'));

function data () {
  return {
    info: { name: "Sara",age: 28,sex: "female" },
    info2: { name: "Timi",age: 20,sex: "male" }
  }
}
// const info = { name: "Sara",age: 28,sex: "female" };
// const info2 = { name: "Timi",age: 20,sex: "male" };

const One = () => { // 1.函数组件
  let element = (
    <div className="one-page">
      <h3 className="one-page-title">React 学习之路才刚刚开始,召唤师</h3>
      <div className="one-page-content">
      <Suspense fallback={
        <div className="loading_cover">
          <div className="loading_text">Loading...</div>
        </div>}>
        <Welcome  user={data().info} />
        <Welcome2  user={data().info2} func="纯函数" />
        <Welcome3  />
        <Welcome4  />
      </Suspense>
      </div>
    </div>
  );
  return element;
}
// class One extends React.Component { // 2.ES6 的class形式
//   render () {
//     return (
//       <div className="one-page">
//         <h3 className="one-page-title">函数组件与 class 组件</h3>
//         <div className="one-page-content">
//           <Welcome  user={info} />
//           <Welcome2  user={info2} func="纯函数" />
//         </div>
//       </div>
//     )
//   }
// }
export default One;