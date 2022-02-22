import React from 'react';
import './Test.scss';
class Welcome extends React.Component {
  render () {
    let user = this.props.user
    console.log("welcome: ", user)
    return (
      <div className="child_test">
        <h4 className="child_test_title">1. 函数组件与 class 组件</h4>
        <p className="child_test_text">Hello, my name is <span>{user.name}</span>. I'm <span>{user.age}</span> years old <span>{user.sex}</span>!</p>
        <p className="child_test_text">Now, I know how to create and use the components.</p>
      </div>
    )
  }
}
export default Welcome;