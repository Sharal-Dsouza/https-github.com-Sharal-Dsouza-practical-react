import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

export default class Hello extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  handleButtonInc =()=> {
    this.setState({
      count: this.state.count + 1
    })
    
  }
   handleButtonDec =()=> {
    this.setState({
      count: this.state.count - 1
    })
    
  }


  render() {
    return (
      <div>
        
        <p>
         count : {this.state.count}
         
        </p>
        <button onClick={this.handleButtonInc}>Increment</button>
        <button onClick={this.handleButtonDec}>Decrement</button>
      </div>
    );
  }
}

render(<Hello />, document.getElementById('root'));
