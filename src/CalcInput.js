import React, {Component} from 'react';
class CalcInput extends Component{
  render(){
    return (
      <div className="calc-input">
      <button onClick={() => (this.props.onNumber(1))}> 1 </button>
      <button onClick={() => (this.props.onNumber(2))}> 2 </button>
      <button onClick={() => (this.props.onNumber(3))}> 3 </button>
      <button onClick={() => (this.props.onNumber(4))}> 4 </button>
      <button onClick={() => (this.props.onNumber(5))}> 5 </button>
      <button onClick={() => (this.props.onNumber(6))}> 6 </button>
      <button onClick={() => (this.props.onNumber(7))}> 7 </button>
      <button onClick={() => (this.props.onNumber(8))}> 8 </button>
      <button onClick={() => (this.props.onNumber(9))}> 9 </button>
      <button onClick={() => (this.props.onNumber(0))}> 0 </button>
      <button onClick={() => (this.props.onFunc('*'))}> Times </button>
      <button onClick={() => (this.props.onFunc('+'))}> Add </button>
      <button onClick={() => (this.props.onFunc('-'))}> Minus </button>
      <button onClick={() => (this.props.onFunc('%'))}> Modulo </button>
      <button onClick={() => (this.props.onFunc('/'))}> Devide </button>
      </div>
    )
  }
}
export default CalcInput;
