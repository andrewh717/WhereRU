import React, { Component } from 'react';
import './App.css';
import './style.css';
import StreetView from './components/StreetView';

class App extends Component {
  render() {
    return (
      <div className="App">     
        <StreetView/>
      </div>
    );
  }
}

export default App;
