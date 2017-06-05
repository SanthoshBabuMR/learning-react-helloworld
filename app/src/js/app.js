import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './hello-world';
import Timer from './timer'

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<HelloWorld user={{firstName: 'Shaktish', lastName: 'kumar'}} />, root);

const root2 = document.createElement('div');
document.body.appendChild(root2);
ReactDOM.render(<HelloWorld user={{firstName: 'Santhosh', lastName: 'babu'}} />, root2);

const timer = document.createElement('div');
document.body.appendChild(timer);
ReactDOM.render(<div> <Timer /> <Timer /> <Timer /> </div>, timer);

setTimeout( () => {
  // ReactDOM.unmountComponentAtNode(timer);
  // ReactDOM.render(<Timer />, timer);
}, 5000)
