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
    console.log(onFunc)
    this.setState({ func, previousValue: this.state.storedValue, storedValue: 0 });
  }
  render() {

    return (

      <div className="Calc">
      <div className="Calc-header">
      <img src={logo} className="Calc-logo" alt="logo" />
      <h2>Welcome to React</h2>
      </div>
      <CalcDisplay storedValue={this.state.storedValue}
      previousvalue={this.state.previousvalue}/>
      <CalcInput onNumber={this.onNumber}
      onFunc={this.onFunc}/>
      </div>

    );
  }
}

export default Calc;
