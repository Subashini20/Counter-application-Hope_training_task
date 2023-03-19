import logo from './logo.svg';
import './App.css';
import React from 'react';

class Counter extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    count: 0,
    Step: 0
    
  }
}
handlechange= (e) => {
  this.setState({Step: e.target.value})
}
handleDecrement=() => {
  if (this.state.count > 0)
  this.setState({count: parseInt(this.state.count) - parseInt(this.state.Step)}, () => {
    if(this.state.count< 0)
  this.setState({count: 0})
  })
}

handleIncrement=() => {
  this.setState({count: parseInt(this.state.count) + parseInt(this.state.Step)})
}

render() {
  return (
    <>
    <h1>Steps:</h1>
     <input type="number" onChange={(e) => {this.handlechange(e)}} style={{marginLeft: "50px"}}></input>
     <h1>Counter:</h1>
     <button style={{padding:"13px", marginLeft: "50px", marginRight: "20px"}} onClick={()=> this.handleDecrement()}> - </button>
     <span style={{padding:"13px", border: "1px solid"}}>{this.state.count}</span>
     <button style={{padding: "13px",  marginLeft: "20px"}} onClick={()=> this.handleIncrement()}> + </button>

    </>
  )
}

}

export default Counter;
