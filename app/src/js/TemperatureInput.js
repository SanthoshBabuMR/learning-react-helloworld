import React from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
  constructor () {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (e) {
    this.props.onTemperatureChange(e.target.value)
  }

  render () {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input type="text"
               value={this.props.temperature}
               onInput={this.handleClick}
               />
      </fieldset>
    );
  }
}

export default TemperatureInput;
