import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };

    
  
  }

  handleButtonClick =()=> {
    this.setState({
      count: this.state.count += 1
    })
    
  }
  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
         count : {this.state.count}
         
        </p>
        <button onClick={this.handleButtonClick}>Increment</button>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
