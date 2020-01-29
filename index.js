import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import ImageSlider from './ImageSlider';
import './style.css';

export default class App extends React.Component {
  constructor() {
    
  }

  render() {
    return (
      <div>
        <Hello/>
        <ImageSlider/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
