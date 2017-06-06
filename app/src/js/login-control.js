import React from 'react';
import Greeting from './greeting';

const LoginButton = (props) => {
  return (
    <button onClick={props.onClick}>Log In</button>
  );
}

const LogoutButton = (props) => {
  return (
    <button onClick={props.onClick}>Log Out</button>
  );
}

class LoginControl extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: null
    };
    this.handleLogoutClick = (e) => this._handleLogoutClick(e);
    this.handleLoginClick = (e) => this._handleLoginClick(e);
  }

  _handleLogoutClick (e) {
    this.setState({
      isLoggedIn: false,
      user: null
    });
  }

  _handleLoginClick (e) {
    this.setState({
      isLoggedIn: true,
      user: 'Santhosh Babu'
    });
  }

  render () {
    const isLoggedIn = this.state.isLoggedIn;
    const user = this.state.user;
    let button = null;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} user={user}/>
        {button}
      </div>
    );
  }
}

export default LoginControl;
