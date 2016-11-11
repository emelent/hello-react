import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import NameForm from './components/NameForm';
import EssayForm from './components/EssayForm';
import SelectForm from './components/SelectForm';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Hello>World</Hello>
        <br/>
        <br/>
        <NameForm/>
        <br/>
        <br/>
        <EssayForm/>
        <br/>
        <br/>
        <SelectForm/>
      </div>
    );
  }
}

export default App;
