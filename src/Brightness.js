import React from 'react';

export function Brightness(props) {
    return (
        <div>
            <h1>The room {props.roomNum} is {props.brightness ? 'lit' : 'dark'} at floor {props.currentFloor}</h1>
        </div>
    );
}