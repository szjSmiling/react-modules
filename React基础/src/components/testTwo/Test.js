import React from 'react';
import '../testOne/Test.scss';
class ConditionRender extends React.Component {
  render () {
    const text = 'if (!props.warn) {return null;}';
    console.log('Welcome1: ', this.props)
    const greeting = this.props.user.greeting
    const isLoggedIn = this.props.user.isLoggedIn
    const unreadMessages = this.props.user.messages
    return (
      <div className="child_test">
        <h4 className="child_test_title">1. 条件渲染</h4>
        <div className="child_test_text">
          <div className="text_title">1.1 元素变量</div>
          <p>Hello! <span>{greeting}</span></p>
          <div className="text_title">1.2 与运算符 &&</div>
          <p>
            Hello! { unreadMessages.length > 0 &&
              <span>You have {unreadMessages.length} unread messages.</span>
            }
          </p>
          <div className="text_title">1.3 三目运算符</div>
          <p>The user is <span>{isLoggedIn ? 'currently': 'not'}</span> logged in.</p>
          <div className="text_title">1.4. 阻止组件渲染</div>
          <p>让 render 方法直接返回 null,&nbsp;&nbsp;&nbsp;&nbsp;如下: <span>{text}</span></p>
        </div>
      </div>
    )
  }
}
export default ConditionRender;