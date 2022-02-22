import React from 'react';
import './Four.scss';
import '../../components/testOne/Test.scss';
import '../../components/testTwo/Test.scss';
import FancyBorder from '../../components/testFour/FancyBorder'
import SplitPane from '../../components/testFour/SplitPane'
import SignUpDialog  from '../../components/testFour/SignUpDialog'

const left = <p>left---&gt; 类似于vue中 slot (插槽) 的用法</p>
const right = <p>right---&gt; 类似于vue中 slot (插槽) 的用法</p>
const text = 'JSX 标签中的所有内容都会作为一个 children prop 传递给 FancyBorder 组件。因为 FancyBorder 将 {props.children} 渲染在一个 <div> 中，被传递的这些子组件最终都会出现在输出结果中。';
const Four = () => {
  return (
    <div className="four-page">
      <h3 className="four-page-title">组合 VS 继承</h3>
      <div className="four-page-content">
        <div className="child_test_text">
          有些组件无法提前知晓它们子组件的具体内容。在 Sidebar（侧边栏）和 Dialog（对话框）等展现通用容器（box）的组件中特别容易遇到这种情况。
          我们建议这些组件使用一个特殊的 children prop 来将他们的子组件传递到渲染结果中：
          <FancyBorder color="blue" >
            <h4 className='child_test_title'>1. Welcome</h4>
            <p>Thank you for visiting our spacecraft!</p>
            <p><span>{text}</span></p>
          </FancyBorder>
          <SplitPane left={left} right={right}/>
        </div>
        <div className="child_test_text">
          <h4 className='child_test_title'>2. 特例关系</h4>
          <SignUpDialog  />
        </div>
        {/* <div className="four-page-btns">
          <button onClick={this.handleLoginClick}>Login</button>
          <button onClick={this.handleLogoutClick}>LogOut</button>
        </div> */}
      </div>
    </div>
  );
}
export default Four;