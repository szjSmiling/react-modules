// 启动的文件（开始执行的入口）！！！！
/* 
  ReactDOM ---> 是提供与 DOM 相关的功能
  serviceWorker ---> 加快 react 运行速度的 js 文件
*/
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
// import './assets/css/common.scss';
// import './assets/css/reset.scss';
// import './assets/css/variable.scss';
import App from './App';
import BasicRoute from './router/Router';
let ele = (
  <BasicRoute>
    <App />
  </BasicRoute>
);
ReactDOM.render(ele, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();

/* 1. ES6中的super可以用在类的继承中, super关键字指代父类的实例(即父类的this对象)。
  注意：
    1. 子类“必须”在 constructor方法中调用super方法，否则创建实例会报错。这是因为子类没有自己的this对象, 只是继承父类的this,然后进行加工。
    2. super 方法在 constructor 中执行时, 必须方法使用 this 之前;
    3. constructor (props) { super(props); } 用于 父子组件传值;
  2. React 绑定属性注意：
    1. class -> className,  label-for -> label-htmlFor
    2. style={{color: red}}
    3. 
      本地图片：import logo from 'xxx.jpg' -> img.src={logo} || img.src={require('xxx.jpg')}
      远程图片：img.src="https://...xxx.jpg"
    4. for 循环 list, 记得绑定属性 key
      this.state.list = ['111', '222', '333'];
      > let listResult = this.state.list.map((value, index) => {
          return <li key={index}>{value}</li>
        })
        <ul>{listResult}</ul>
      > <ul>{
          this.state.list.map((value, index) => {
            return <li key={index}>{value}</li>
          })
        }</ul>
      5. onClick 改变 this 指向的方法
        > onClick={this.getData.bind(this)}
        > constructor () { super(); this.getData = this.getData.bind(this) }
        > getData = () => { 箭头函数没有this，使用父级的this }
*/