import React, { useState, useRef } from 'react';
import { Scene } from './components/Scene';
import { Overlay } from './components/Overlay';
import { AppState } from './types';

function App() {
  const [appState, setAppState] = useState<AppState>(AppState.TREE_SHAPE);
  
  // Ref to track mouse/touch start position to distinguish clicks from drags
  const mouseDownPos = useRef({ x: 0, y: 0 });

  const handlePointerDown = (e: React.PointerEvent) => {
    mouseDownPos.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    const dragThreshold = 5; // pixels
    const dx = Math.abs(e.clientX - mouseDownPos.current.x);
    const dy = Math.abs(e.clientY - mouseDownPos.current.y);

    // If movement is minimal (click) and state is SCATTERED, assemble the tree
    if (dx < dragThreshold && dy < dragThreshold) {
      if (appState === AppState.SCATTERED) {
        setAppState(AppState.TREE_SHAPE);
      }
    }
  };

  return (
    <div 
      className="relative w-full h-screen bg-black overflow-hidden touch-none"
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
    >
      {/* Radial Gradient Background for that luxury depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#0a2e16_0%,_#000000_100%)] opacity-80 -z-10" />
      
      {/* 3D Scene */}
      <Scene appState={appState} />
      
      {/* UI Overlay */}
      <Overlay appState={appState} setAppState={setAppState} />
    </div>
  );
}

export default App;