import './App.css'; 

import React from 'react'
// import Phaser from './components/PhaserGame';
import PhaserGame from './components/PhaserGame';
function App() {
  return (
    <div className="App flex flex-col items-center w-full0">
      <h1 className='heading text-[30px] text-blue-500 border-2 mt-4 border-yellow-500 p-2 font-bold'>Microgravity Astronaut Game</h1>
      <PhaserGame />
    </div>
  );
}

export default App
