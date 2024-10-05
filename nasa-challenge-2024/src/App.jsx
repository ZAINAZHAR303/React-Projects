import './App.css'; 

import React from 'react'
// import Phaser from './components/PhaserGame';
import PhaserGame from './components/PhaserGame';
function App() {
  return (
    <div className="App flex flex-col items-center w-full bg-blue-300">
      <h1 className='bg-blue-400'>Zero-G Astronaut Game</h1>
      <PhaserGame />
    </div>
  );
}

export default App
