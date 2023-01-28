import logo from './logo.svg';
import './App.css';
import React, { Component,Suspense }  from 'react';

import Chart from "./components/chart"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Sus <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Chart/>
    </div>
  );
}

export default App;
