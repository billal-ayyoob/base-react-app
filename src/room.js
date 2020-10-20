import React, { useState } from 'react';

function Room(props){
	const [isLit, setLit] = useState(true);
	const brightness = isLit ? "lit" : "dark";

	let [currTemp, setTemp] = useState(22);

	return (
		<div className={`room ${brightness}`}>
			<h1>The room {props.roomNum} is {isLit ? 'lit' : 'dark'} at floor {props.floor}</h1>
			<br />
			<h2>The room temperature is <span className="temp">{currTemp}</span>'o Celsius</h2>
			<br />
			<button className="btn" onClick={() => setLit(true)}>ON</button>
			<br />
			<button className="btn" onClick={() => setLit(false)}>OFF</button>
			<br />
			<button className="btnInc" onClick={() => setTemp(currTemp+1)}> + </button>
			<button className="btnDec" onClick={() => setTemp(currTemp-1)}> - </button>
		</div>
	);
}

export default Room;