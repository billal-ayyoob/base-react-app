import React from 'react';
import Brightness from './Brightness';
import Temperature from './Temperature';

function Middle() {
    return (
        <div>
            <Brightness />
            <hr/>
            <Temperature />
        </div>
    )
}

export default Middle;