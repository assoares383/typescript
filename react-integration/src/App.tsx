import React from 'react';
import Count from './components/Count';

import './App.css';

function App() {
  return (
    <div className="App">
      <Count initialValue={9876} />
    </div>
  );
}

export default App;
