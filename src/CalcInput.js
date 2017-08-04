import React, {Component} from 'react';
class CalcInput extends Component{
  render(){
    return (
      <div>
      <div>
      <button onClick={() => (this.props.onNumber(1))}
      className='button1'> 1 </button>
      <button onClick={() => (this.props.onNumber(2))}
      className='button2'> 2 </button>
      <button onClick={() => (this.props.onNumber(3))}
      className='button3'> 3 </button>
      <button onClick={() => (this.props.onFunc('*'))}
      className='buttonTimes'> X </button>
      </div>
      <div>
      <button onClick={() => (this.props.onNumber(4))}
      className='button4'> 4 </button>
      <button onClick={() => (this.props.onNumber(5))}
      className='button5'> 5 </button>
      <button onClick={() => (this.props.onNumber(6))}
      className='button6'> 6 </button>
      <button onClick={() => (this.props.onFunc('+'))}
      className='buttonPlus'> + </button>
      </div>
      <div>
      <button onClick={() => (this.props.onNumber(7))}
      className='button7'> 7 </button>
      <button onClick={() => (this.props.onNumber(8))}
      className='button8'> 8 </button>
      <button onClick={() => (this.props.onNumber(9))}
      className='button9'> 9 </button>
      <button onClick={() => (this.props.onFunc('-'))}
      className='buttonMinus'> - </button>
      </div>
      <button onClick={this.props.onClear}
      className='buttonClear'> C </button>
      <button onClick={() => (this.props.onNumber(0))}
      className='button0'> 0 </button>
      <button onClick={() => (this.props.onFunc('/'))}
      className='buttonDevide'> / </button>
      <button onClick={() => (this.props.onFunc('%'))}
      className='buttonMod'> % </button>
      <button onClick={this.props.onEq}
      className='buttonEq'> Is </button>
      </div>
    )
  }
}
export default CalcInput;
