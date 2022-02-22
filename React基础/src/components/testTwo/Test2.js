import React from 'react';
import '../testOne/Test.scss';
import '../testTwo/Test.scss';

class RenderMoreList extends React.Component {
  render () {
    console.log('Welcome2: ', this.props);
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) =>
      <li key={number.toString()}>{number}</li>
    );
    return (
      <div className="child_test">
        <h4 className="child_test_title">2. 渲染多个列表 &amp; Key</h4>
        <div className="child_test_text">
          <div className="text_title">2.1 渲染多个组件</div>
          <ul className="text_ul_list">{listItems}</ul>
          <p><span>Warning: a key should be provided for list items</span>，意思是当你创建一个元素时，必须包括一个特殊的 key 属性.<span></span></p>
          <p>key 帮助 React 识别哪些元素改变了，比如被添加或删除。因此你应当给数组中的每一个元素赋予一个确定的标识。</p>
          <p>元素的 key 只有放在就近的数组上下文中才有意义。<br/> <span>一个好的经验法则是：在 map() 方法中的元素需要设置 key 属性</span></p>
          <div className="text_title">2.2 key 在兄弟节点之间必须唯一</div>
          <p>数组元素中使用的 key 在其兄弟节点之间应该是独一无二的。然而，它们不需要是全局唯一的。当我们生成两个不同的数组时，我们可以使用相同的 key.</p>
        </div>
      </div>
    )
  }
}
export default RenderMoreList;