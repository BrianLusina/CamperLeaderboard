import React, { Component } from 'react';
import Header from './Header';
import Body from './body/Body';


class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Body apiroot="https://fcctop100.herokuapp.com/api/fccusers/"/>
      </div>
    );
  }
}

export default App;
