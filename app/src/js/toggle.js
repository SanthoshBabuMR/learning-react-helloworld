import React from 'react';

class Toggle extends React.Component {
  constructor (props){
    super (props);
    this.state = {
      isToggleOn: this.props.isToggleOn
    }
    this.handleClick = (e) => this._handleClick(e);
  }

  componentWillReceiveProps (props) {
    this.setState({
      isToggleOn: props.isToggleOn
    })
  }

  render () {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON': 'OFF'}
        </button>
      </div>
    );
  }

  _handleClick (e) {
    this.setState({
      isToggleOn: !this.state.isToggleOn
    });
  }
}

export default Toggle;
