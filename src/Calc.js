import React, { Component } from 'react';
import logo from './logo.svg';
import './Calc.css';
import './CalcDisplay'
import './CalcInput'
class Calc extends Component {
  render() {
    return (
      <div className="Calc">
        <div className="Calc-header">
          <img src={logo} className="Calc-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="Calc-intro">
          To get started, edit <code>src/Calc.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Calc;
