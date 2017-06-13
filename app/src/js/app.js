import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './hello-world';
import Timer from './timer';
import Toggle from './toggle';
import LoginControl from './login-control';
import ListComponent from './list-component';
import Calculator from './Calculator';
import WelcomeDialog from './WelcomeDialog';
import FilterableProductTable from './FilterableProductTable';

var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      test: 1
    }
  }
  componentDidMount () {
    /*
    setInterval(() => {
      this.setState({test: this.state.test + 2})
    }, 3000)
    */
  }
  render () {
    // console.log(this.state.test);
    console.info('app render');
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
        <i>Product Search</i>
        <FilterableProductTable products={PRODUCTS} />
        <hr />
      </div>
    );
  }
}

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<App />, root);
