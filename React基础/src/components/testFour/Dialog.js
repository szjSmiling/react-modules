import React from 'react';
import FancyBorder from './FancyBorder'

class Dialog extends React.Component {
  constructor (props) {
    super(props);
    this.state = { login: '' }
  }

  render () {
    console.log("Dialog: ", this.props)
    return (
      <FancyBorder color="blue">
        <h4 className="Dialog-title">{this.props.title}</h4>
        <p className="Dialog-message">{this.props.message}</p>
        <div className="Dialog-btns">
          {this.props.children}
        </div>
      </FancyBorder>
    )
  }
}
export default Dialog;