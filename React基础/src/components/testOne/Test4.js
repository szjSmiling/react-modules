import React from 'react';
import './Test.scss';
class Welcome4 extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isToggleOn: true,
      text1: '<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>',
      text2: '<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>'
    }
    // 方法一: 为了在回调中使用 `this`，这个绑定是必不可少的
    // this.handleClick = this.handleClick.bind(this);
    // this.handleToggle = this.handleToggle.bind(this);
  }
  // 方法二: public class fields 语法
  handleClick = (e) => {
    e.preventDefault();
    console.log('The link was clicked.')
  }
  // handleClick (e) {
  //   e.preventDefault();
  //   console.log('The link was clicked.')
  // }
  handleToggle (name, e) {
    console.log(name, e)
    this.setState(state => ({ // 因为state数据可能异步更新,所以使用到state中的数据赋值时,需要这种写法
      isToggleOn: !state.isToggleOn
    }))
  }
  render () {
    return (
      <div className="child_test">
        <h4 className="child_test_title">4. 事件处理</h4>
        <div className="child_test_text">
          <p>React 事件的命名采用小驼峰式（camelCase），而不是纯小写。</p>
          <p>使用 JSX 语法时你需要传入一个函数作为事件处理函数，而不是一个字符串。</p>
          <p>注意: <span>在 React 中另一个不同点是你不能通过返回 false 的方式阻止默认行为。你必须显式的使用 preventDefault.</span></p>
        </div>
        <a className="child_test_click" href="##" onClick={this.handleClick}>Click me</a>
        <button className="child_test_click" onClick={this.handleToggle.bind(this, 'Jelly')}>{this.state.isToggleOn?'Turn On':'Turn OFF'}</button>
        <div className="child_test_text">
          <p>向事件处理函数传递参数:</p>
          <p>{this.state.text1}</p>
          <p>{this.state.text2}</p>
          <p>这两种情况下，React 的事件对象 e 会被作为第二个参数传递。如果通过箭头函数的方式，事件对象必须显式的进行传递，而通过 bind 的方式，事件对象以及更多的参数将会被隐式的进行传递。</p>
        </div>
      </div>
    )
  }
}
export default Welcome4;