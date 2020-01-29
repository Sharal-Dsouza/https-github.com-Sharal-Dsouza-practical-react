import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

export default class ImageSlider extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [
        "https://wowslider.com/sliders/demo-31/data1/images/bench560435.jpg",
        "https://www.oberlo.com/wp-content/uploads/2017/12/Top20.jpg"
      ],
      ind: 0
    };
  }
  
  nextClick = ()=> {
    this.setState({
      ind: this.state.ind + 1,
      console: console.log("next called")
    })
  }
  prevClick = ()=> {
    this.setState({
      ind: this.state.ind - 1,
      console: console.log("next called")
    })
  }

  render() {
    return (
      <div>
        
       <img src={this.state.images[this.state.ind]} />
        <button onClick={this.prevClick}>Prev</button>
        <button onClick={this.nextClick}>Next</button>
      </div>
    );
  }
}

render(<ImageSlider />, document.getElementById('root'));
