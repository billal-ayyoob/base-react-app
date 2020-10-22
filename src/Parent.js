import React from 'react';
import Brightness from './Brightness';
import Temperature from './Temperature';
import Temperature2 from './Temperature2';

const Parent = () => {
    return (
        <div>
            <Temperature />
            <br />
            <Brightness />
            <br />
            <hr/>
            <Temperature2 />
        </div>
    );
}

export default Parent;