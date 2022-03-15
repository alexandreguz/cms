import './App.css';
import Home from './components/Home';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <h1>Customer Management System</h1>
      <Home />
    </div>
  );
}

export default App;