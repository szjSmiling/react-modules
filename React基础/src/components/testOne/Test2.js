import React from 'react';
import './Test.scss';

// class Welcome2 extends React.Component {
//   render () {
//     console.log(this.props)
//     return (
//       <div className="child_test2">
//         <h4 className="child_test_title">2.Props 的只读性</h4>
//         <div className="child_test_text">
//           <pre>ex: (a, b) => ( a + b;)</pre>
//           React的一个严格的规则: <span>所有 React 组件都必须像纯函数一样保护它们的 props 不被更改。</span>
//         </div>
//       </div>
//     )
//   }
// }
const Welcome2 = (user) => {
  console.log("welcome2:", user)
  return (
    <div className="child_test">
      <h4 className="child_test_title">2. Props 的只读性</h4>
      <div className="child_test_text">
        <pre>ex: (a, b) =&gt; ( a + b;)</pre>
        React的一个严格的规则: --&gt;<span>所有 React 组件都必须像纯函数一样保护它们的 props 不被更改。</span>
      </div>
    </div>
  )
}
export default Welcome2;