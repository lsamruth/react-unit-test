import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {props.showLink ? <a>show link</a> : <a>hide link</a>}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Count : {count}</h1>
        <div className="btn-container">
          <button className="counter-btn increment" onClick={() => setCount(count + 1)}>Increase count</button>
          <button className="counter-btn decrement" onClick={() => setCount(count + -1)}>Decrease count</button>
          <button className="counter-btn reset" onClick={() => setCount(0)}>Reset count</button>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
