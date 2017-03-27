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
      displayNumber: 0,
      storedNumber: 0,
      eval: 0
    }
  }
  render() {

    return (

      <div className="Calc">
      <div className="Calc-header">
      <img src={logo} className="Calc-logo" alt="logo" />
      <h2>Welcome to React</h2>
      </div>
      <CalcDisplay/>
      <CalcInput/>
      </div>

    );
  }
}

export default Calc;
