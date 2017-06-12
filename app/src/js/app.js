import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './hello-world';
import Timer from './timer';
import Toggle from './toggle';
import LoginControl from './login-control';
import ListComponent from './list-component';
import Calculator from './Calculator';
import WelcomeDialog from './WelcomeDialog';

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      test: 1
    }
  }
  componentDidMount () {
    setInterval(() => {
      this.setState({test: this.state.test + 2})
    }, 3000)
  }
  render () {
    console.log(this.state.test);
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
        <Toggle isToggleOn={this.state.test%2 === 0? 'ON' : 'OFF'}/>
        <hr />
        <i>Conditional</i>
        <LoginControl />
        <hr />
        <i>list component</i>
        <ListComponent list={[10,20,30,40]} />
        <hr />
        <i>Lifting state up</i>
        <Calculator />
        <hr />
        <i>Composition</i>
        <WelcomeDialog />
        <hr />
      </div>
    );
  }
}

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<App />, root);
