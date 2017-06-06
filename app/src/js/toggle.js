import React from 'react';

class Toggle extends React.Component {
  constructor (){
    super ();
    this.state = {
      isToggleOn: false
    }
    this.handleClick = (e) => this._handleClick(e);
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
