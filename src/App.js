import React from 'react';
import logo from './logo.svg';
import HiddenMessage from './components/HiddenMessage';
import Cards from './components/Cards';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <HiddenMessage>Test Message</HiddenMessage>
        <Cards></Cards>
      </div>
    </div>
  );
}

export default App;
