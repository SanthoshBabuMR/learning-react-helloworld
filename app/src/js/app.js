import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './hello-world';
import Timer from './timer'
import Toggle from './toggle'
import Greeting from './greeting.js'

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
        <Greeting />
        <Greeting user='Santhosh babu' isUserLoggedIn />
        <hr />
      </div>
    );
  }
}

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<App />, root);
