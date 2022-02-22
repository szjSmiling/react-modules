import React from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};
class TemperatureInput extends React.Component {

  handleChange (e) {
    // state:--> this.setState({ temperature: e.target.value })
    this.props.onTemperatureChange(e.target.value);
  }
  
  render () {
    const scale = this.props.scale
    const temperature = this.props.temperature
    return (
      <fieldset className="page_fieldset">
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input type="number" value={temperature} onChange={this.handleChange.bind(this)} />
      </fieldset>
    )
  }
}
export default TemperatureInput;