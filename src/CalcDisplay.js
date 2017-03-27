import React, {Component} from 'react';
class CalcDisplay extends Component {
  render(){
    return(
      <div>
      <p>'halb'</p>
      <p>{this.state.displayNumber}</p>
      <p>{this.state.CalcInput}</p>
      </div>
    )
  }
}
export default CalcDisplay;
