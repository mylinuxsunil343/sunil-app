// import logo from './logo.svg';
import './App.css';

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    </div>
  );
}
*/
import React from 'react';
import Banner from './Banner';
import DatePicker from './DatePicker';
import GenderRadioButton from './GenderRadioButton';
import Salary from './Salary';
import LifestyleChoices from './LifeStyle';

function App() {
  return (
    <div>
      <Banner message="Welcome to MM - Life Insurance at your fingertips!" />
      <DatePicker />
      <GenderRadioButton />
      <Salary />
      <LifestyleChoices />
    </div>
  );
}

export default App;