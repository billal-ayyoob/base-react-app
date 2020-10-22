import React, { useState } from 'react';
import './App.css';
import Parent from './Parent';
import CounterContext from './CounterContext';

function App(props) {
  let count = useState(22);
  let isLit = useState(true);
  return (
    <CounterContext.Provider value={{counterValue: count, brightValue: isLit, roomNum: 7, floor: 14}}>
      <div>
        <Parent />
      </div>
      {props.children}
    </CounterContext.Provider>
  );
}

export default App;
