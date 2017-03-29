import React, {Component} from 'react';
class CalcInput extends Component{
  render(){
    return (
      <div className="calc-input">
      {
        [1,2,3,4,5,6,7,8,9,0].map( i =>(
          <button key={'number'+i}
          className="calc-input-number"
          onClick={()=>this.props.onNumber(i)}>
          {i}
          </button>
        ) )
      }
      <p>'blah'</p>
      <button onClick={() => (this.props.displayNumber(1))}
      key={this.setState.displayNumber(this.props.displayNumber('number'+1)}> 1 </button>
      <button onClick={() => (this.props.displayNumber(2))}> 2 </button>
      <button onClick={() => (this.props.displayNumber(3))}> 3 </button>
      <button onClick={() => (this.props.displayNumber(4))}> 4 </button>
      <button onClick={() => (this.props.displayNumber(5))}> 5 </button>
      <button onClick={() => (this.props.displayNumber(6))}> 6 </button>
      <button onClick={() => (this.props.displayNumber(7))}> 7 </button>
      <button onClick={() => (this.props.displayNumber(8))}> 8 </button>
      <button onClick={() => (this.props.displayNumber(9))}> 9 </button>
      <button onClick={() => (this.props.displayNumber(0))}> 0 </button>
      </div>
    )
  }
}
export default CalcInput;
