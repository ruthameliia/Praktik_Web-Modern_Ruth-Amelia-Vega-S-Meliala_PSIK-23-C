import React from 'react';
import CounterDemo from './components/CounterDemo';
import './App.css';
import './style.css';

function App() {
  return (
    <div className="app">
      <h1>Custom Hooks & Reusability</h1>

      <div className="demo-section">
        <h2>1. useCounter Hook</h2>
        <CounterDemo />
      </div>
    </div>
  );
}

export default App;