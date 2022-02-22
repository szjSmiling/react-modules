import React from 'react';
import './Three.scss';
import '../../components/testOne/Test.scss';
import '../../components/testTwo/Test.scss';
import Calculator from '../../components/testThree/Calculator';

const Three = () => {

  return (
    <div className="three-page">
      <h3 className="three-page-title">共享状态提升到最近的父组件</h3>
      <div className="three-page-content">
        <Calculator />
        {/* <div className="three-page-btns">
          <button onClick={this.handleLoginClick}>Login</button>
          <button onClick={this.handleLogoutClick}>LogOut</button>
        </div> */}
      </div>
    </div>
  );
}
export default Three;