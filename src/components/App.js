import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header';
import Body from './body/Body';


class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Body apiroot="https://fcctop100.herokuapp.com/api/fccusers/top/"/>
      </div>
    );
  }
}

export default App;
