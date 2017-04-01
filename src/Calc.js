import React, { Component } from 'react';
import logo from './logo.svg';
import './Calc.css';
import CalcDisplay from './CalcDisplay';
import CalcInput from './CalcInput';
class Calc extends Component {
  constructor(){
    console.log('blah')
    super();
    this.state = {
      storedValue: 0,
      previousValue: 0,
      func: '+'
    }
  }

  onNumber = (number) => {
    console.log(number)
    this.setState({ storedValue: this.state.storedValue *10 + number });
  }

  onFunc = (func) => {
    console.log(func)
    this.setState({ func, previousValue: this.state.storedValue, storedValue: 0 });
  }

  onClear = () => {
    this.setState({
      storedValue: 0,
      previousValue: 0,
      func: '+',
    });
  }
  onEq = () => {
    const { func, previousValue, storedValue } = this.state;
    if (func === '+') {
      this.setState({storedValue: previousValue + storedValue, previousValue: 0})
    } else if (func === '/') {
      this.setState({storedValue: previousValue / storedValue, previousValue: 0})
    }else if (func === '%') {
      this.setState({storedValue: previousValue % storedValue, previousValue: 0})
    } else if (func === '*') {
      this.setState({storedValue: previousValue * storedValue, previousValue: 0})
    } else if (func === '-') {
      this.setState({storedValue: previousValue - storedValue, previousValue: 0}) 
    }}


  render() {

    return (

      <div className="Calc">
      <div className="Calc-header">
      <img src={logo} className="Calc-logo" alt="logo" />
      <h2>Welcome to React</h2>
      </div>
      <CalcDisplay
      storedValue={this.state.storedValue}
      previousValue={this.state.previousValue}
      func={this.state.func}/>
      <CalcInput
      onNumber={this.onNumber}
      onFunc={this.onFunc}
      onClear={this.onClear}
      onEq={this.onEq}/>
      </div>

    );
  }
}

export default Calc;
