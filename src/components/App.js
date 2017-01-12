import React, { Component } from 'react';
import logo from '../svg/logo.svg';
import '../styles/App.css';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
      </div>
    );
  }
}

export default App;
