import React from 'react';
import './Two.scss';
import ConditionRender from '../../components/testTwo/Test';
import RenderMoreList from '../../components/testTwo/Test2';
import RenderForm from '../../components/testTwo/Test3';

class Two extends React.Component {
  constructor (props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleLogoutClick  = this.handleLogoutClick.bind(this)
    this.state = {
      greeting: 'Please sign up.',
      isLoggedIn: false,
      messages: ['React', 'Re: React', 'Re:Re: React']
    }
  }
  handleLoginClick () {
    this.setState((state) => ({
      isLoggedIn: true,
      greeting: 'Welcome back!'
    }))
  }
  handleLogoutClick () {
    this.setState((state) => ({
      isLoggedIn: false,
      greeting: 'Please sign up.'
    }))
  }

  render () {
    return (
      <div className="two-page">
        <h3 className="two-page-title">函数组件与 class 组件</h3>
        <div className="two-page-content">
          <ConditionRender user={this.state} />
          <div className="two-page-btns">
            <button onClick={this.handleLoginClick}>Login</button>
            <button onClick={this.handleLogoutClick}>LogOut</button>
          </div>
          <RenderMoreList />
          <RenderForm />
        </div>
      </div>
    )
  }
}
export default Two;