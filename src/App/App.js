import React, { Component } from 'react';
import './App.scss';
import Nav from '../Nav/Nav';
import NameBanner from '../NameBanner/NameBanner';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <NameBanner/>
      </div>
    );
  }
}

export default App;
