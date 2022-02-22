import React from 'react';
import Dialog from './Dialog'

class SignUpDialog extends React.Component {
  constructor (props) {
    super(props);
    this.state = { login: '' }
  }
  
  render () {
    return (
      <Dialog title="Mars Exploration Program" message="How should we refer to you?">
        <input value={this.state.login} onChange={this.handleChange.bind(this)} />
        <button onClick={this.handleSignUp.bind(this)}>Sign Me Up!</button>
      </Dialog>
    )
  }

  handleChange (e) {
    this.setState({ login: e.target.value })
  }
  handleSignUp () {
    console.log(`Welcome aboard, ${this.state.login}!`)
  }
}
export default SignUpDialog;