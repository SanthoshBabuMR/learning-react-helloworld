import React from 'react';

class Timer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      timeInfo: new Date().toLocaleTimeString()
    };
    this.tick = () => this._tick();
  }

  render () {
    return (
      <div>
        <h3>It is {this.state.timeInfo}.</h3>
      </div>
    );
  }

  componentDidMount () {
    // uncomment the line below for timer to work
    // this.timerId = setInterval(this.tick, 1000);
  }

  componentWillUnmount () {
    clearInterval(this.timerId);
  }

  _tick () {
    this.setState({
      timeInfo: new Date().toLocaleTimeString()
    });
  }
}

export default Timer;
