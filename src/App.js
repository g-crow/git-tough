import React from 'react';
import logo from './logo.svg';
import avatar from './gcrowavatar.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={avatar} alt="user" />
        <p>
          Hi. This is where the magic happens. Testing if this changes anything.
        </p>
      </header>
    </div>
  );
}

export default App;
