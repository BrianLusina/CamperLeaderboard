import React, { Component } from 'react';
import logo from '../svg/logo.svg';
import '../styles/App.css';
import Header from './Header';
import Slideshow from './Slideshow';
import GridWrap from './GridWrap';


class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div id="grid-gallery" className="grid-gallery">
          <GridWrap />
          <Slideshow />
        </div>
      </div>
    );
  }
}

export default App;
