import React from 'react';

export function Temperature (props) {
    return (
        <div>
            <h2>The current temperature of the room is <span className="temp">{props.temperature}</span>'o Celsius</h2>
        </div>
    );
}