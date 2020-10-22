import React, { useContext } from 'react';
import CounterContext from './CounterContext';

const Brightness = () => {
    let {brightValue, roomNum, floor} = useContext(CounterContext);
    const brightness = brightValue[0] ? "lit" : "dark";
    return (
        <div className={`room ${brightness}`}>
            <h1>The room  <span className="temp">{roomNum}</span> is {brightValue[0] ? '☀️' : '🌙'} at <span className="temp">{floor}</span> th floor.</h1>
            <button className="btn" onClick={() => {brightValue[1](true)}}>ON</button>
			<button className="btn" onClick={() => {brightValue[1](false)}}>OFF</button>
        </div>
    );
}

export default Brightness