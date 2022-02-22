import React from 'react';
import './Test.scss';

class Welcome3 extends React.Component {
  constructor (props) {
    // console.log(props)
    super (props); // 将 props 传递到父类的构造函数中
    this.state = {
      date: new Date()
    }
    console.log("welcome3: ", this.state.date)
  }
  componentDidMount () { // 组件被渲染到 DOM 中后运行
    this.timerID = setInterval(() => {
      this.refreshDate()
    }, 1000)
  }
  componentWillUnmount () {
    clearInterval(this.timerID);
  }
  refreshDate () {
    // 使用 this.setState() 来时刻更新组件 state
    this.setState({
      date: new Date(),
      text: "// Correct  this.setState((state, props) => ({ counter: state.counter + props.increment})) "
    })
  }
  render () {
    return (
      <div className="child_test">
        <h4 className="child_test_title">3. State &amp; 生命周期</h4>
        <div className="child_test_text">
          <div className="text_title">3.1 分装简单的时钟, 利用state实现.</div>
          <p>注意: <span>State 与 props 类似，但是 state 是私有的，并且完全受控于当前组件。</span></p>
          <p>It is {this.state.date.toLocaleString()}.</p>
        </div>
        <div className="child_test_text">
          <div className="text_title">3.2 正确地使用 State.(注意以下三点)</div>
          <p>1. 不要直接修改 State, <span>例如: this.state.comment = 'Hello';</span></p>
          <p>2. State 的更新可能是异步的<br/>
            因为 this.props 和 this.state 可能会异步更新，所以你不要依赖他们的值来更新下一个状态.<br/>
            要解决这个问题，可以让 setState() 接收一个函数而不是一个对象。这个函数用上一个 state 作为第一个参数，
            将此次更新被应用时的 props 做为第二个参数：<br/>
            <span>{this.state.text}</span>
          </p>
          <p>3. State 的更新会被合并</p>
        </div>
        <div className="child_test_text">
          <div className="text_title">3.3 “自上而下”或是“单向”的数据流</div>
          <p>注意: <span>不管是父组件或是子组件都无法知道某个组件是有状态的还是无状态的，并且它们也并不关心它是函数组件还是 class 组件。</span></p>
        </div>
      </div>
    )
  }
}
export default Welcome3;