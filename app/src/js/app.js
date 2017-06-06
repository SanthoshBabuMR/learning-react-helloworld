import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './hello-world';
import Timer from './timer'
import Toggle from './toggle'
import LoginControl from './login-control'

class App extends React.Component {
  render () {
    return (
      <div>
        <i>Hello World</i>
        <HelloWorld user={{firstName: 'Shaktish', lastName: 'kumar'}} />
        <HelloWorld user={{firstName: 'Santhosh', lastName: 'babu'}} />
        <hr />
        <i>Timer</i>
        <Timer />
        <hr />
        <i>Event</i>
        <Toggle />
        <hr />
        <i>Conditional</i>
        <LoginControl />
        <hr />
      </div>
    );
  }
}

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<App />, root);
