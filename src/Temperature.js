import React, { useContext } from 'react';
import CounterContext from './CounterContext';

const Temperature = () => {
    let {counterValue} = useContext(CounterContext);
    return (
        <div>
            <h2>Using Context API to maintain state</h2>
            <h1>The counter value is: {counterValue[0]}</h1>
            <button className="btnInc" onClick={()=>{counterValue[1](++counterValue[0])}}> + </button>
            <button className="btnDec" onClick={()=>{counterValue[1](--counterValue[0])}}> - </button>
        </div>
    );
}

export default Temperature;