import React from 'react';
import TopBar from "./topBar/TopBar";
import LeftBar from "./leftBar/LeftBar";
import Canvas from "./canvas/Canvas";
import './app.scss';

function App() {
  return (
    <div className="app">
      <TopBar/>
      <div className="wrap">
          <LeftBar/>
          <Canvas/>
      </div>

    </div>
  );
}

export default App;
