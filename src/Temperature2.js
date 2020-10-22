import React, { useReducer } from 'react';
import CounterReducer from './CounterReducer';

const Temperature2 = () =>{
    let [state, dispatch] = useReducer(CounterReducer, 22);
    return (
        <div>
            <h1>Using reducer to maintain state: {state}</h1>
            <button className="btnInc" onClick={()=>dispatch('INCREMENT')}> Icrement value to reducer </button>
            <button className="btnDec" onClick={()=>dispatch('DECREMENT')}> Decrement value to reducer </button>
        </div>
    );
}

export default Temperature2;