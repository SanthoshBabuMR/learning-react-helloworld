import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './hello-world';
import Timer from './timer'
import Toggle from './toggle'

class App extends React.Component {
  render () {
    return (
      <div>
        <HelloWorld user={{firstName: 'Shaktish', lastName: 'kumar'}} />
        <HelloWorld user={{firstName: 'Santhosh', lastName: 'babu'}} />
        <Timer />
        <Toggle />
      </div>
    );
  }
}

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<App />, root);
