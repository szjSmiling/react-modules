import React from 'react';
import '../testOne/Test.scss';
import '../testTwo/Test.scss';

class RenderForm extends React.Component {
  constructor (props) {
    console.log('Welcome3: ', props);
    super(props);
    this.state = {
      name: '',
      fruit: 'coconut',
      textarea: 'text area',
      isGoing: true,
      numberOfGuests: 2
    }
  }
  handleSubmit (event) {
    console.log(`${this.state.name}, ${this.state.textarea}, select the ${this.state.fruit}`)
    event.preventDefault();
  }
  handleChange (type, event) { // 受控组件输入框变化
    if (type === '1') {
      this.setState({ name: event.target.value })
    } else if (type === '2') {
      this.setState({ textarea: event.target.value })
    } else if (type === '3') {
      this.setState({ fruit: event.target.value })
    }
  }
  handleInputChange (event) { // 处理多个输入
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  render () {
    return (
      <div className="child_test">
        <h4 className="child_test_title">3. 表单</h4>
        <div className="child_test_div">
          <div className="child_test_text">
            <div className="text_title">3.1 受控组件</div>
            <form className="child_form" onSubmit={this.handleSubmit.bind(this)}>
              <label htmlFor="name">名字:
                <input id="name" type="text" placeholder="Jelly" value={this.state.name} onChange={this.handleChange.bind(this, '1')} />
              </label>
              <label htmlFor="reason" className="label_reason">理由:
                <textarea id="reason" value={this.state.textarea} onChange={this.handleChange.bind(this, '2')}></textarea>
              </label>
              <label htmlFor="fruit">水果:
                <select value={this.state.fruit} onChange={this.handleChange.bind(this, '3')} >
                  <option value="grapefruit">葡萄柚</option>
                  <option value="lemon">柠檬</option>
                  <option value="coconut">椰子</option>
                  <option value="mango">芒果</option>
                </select>
              </label>
              <input type="submit" value="提交" onSubmit={this.handleSubmit.bind(this)} />
            </form>
          </div>
          <div className="child_test_text">
            <div className="text_title">3.2 处理多个输入</div>
            <form className="child_form" onSubmit={this.handleSubmit.bind(this)}>
              <label htmlFor="isGoing">参与:
                <input type="checkbox" id="isGoing" name="isGoing" checked={this.state.isGoing} onChange={this.handleInputChange.bind(this)} />
              </label>
              <label htmlFor="numberOfGuests">来宾:
                <input type="number" id="numberOfGuests" name="numberOfGuests" value={this.state.numberOfGuests} onChange={this.handleInputChange.bind(this)} />
              </label>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default RenderForm;