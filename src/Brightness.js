import React from 'react';

export function Brightness(props) {
    return (
        <div>
            <h1>The room <span className="temp">{props.roomNum}</span> is {props.brightness ? 'lit' : 'dark'} at floor <span className="temp">{props.currentFloor}</span></h1>
        </div>
    );
}