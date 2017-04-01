import React, {Component} from 'react';
class CalcDisplay extends Component {
  render(){
    console.log(this.props)
    return(
      <div>
      <p>{this.props.storedValue}</p>
      <p>{this.props.func}</p>
      <p>{this.props.previousValue}</p>
      </div>
    )
  };
};
export default CalcDisplay;
