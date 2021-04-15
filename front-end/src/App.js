import React from 'react';
import Grid from './components/Grid';
import Tiles from './components/Tiles'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Bananagrams</h1>
      <Grid/>
      <Tiles/>
    </div>
  );
}

export default App;
