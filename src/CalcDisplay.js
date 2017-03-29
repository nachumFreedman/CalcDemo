import React, {Component} from 'react';
class CalcDisplay extends Component {
  render(){
    console.log(this.props)
    return(
      <div>
      <p>'halb'</p>
      <p>{this.props.displayNumber}</p>
      <p>{this.props.storedNumber}</p>
      </div>
    )
  };
};
export default CalcDisplay;
