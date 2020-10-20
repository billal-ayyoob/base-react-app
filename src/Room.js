import React, { useState } from 'react';
import { Temperature } from "./Temperature.js";
import { Brightness }from "./Brightness.js";

export function Room(props){
	const [isLit, setLit] = useState(true);
	const brightness = isLit ? "lit" : "dark";

	let [currTemp, setTemp] = useState(22);

	return (
		<div className={`room ${brightness}`}>
			<Brightness brightness={isLit} currentFloor={props.floor} roomNum={props.roomNum}/>
			<br />
			<Temperature  temperature={currTemp}/>
			<br />
			<button className="btn" onClick={() => setLit(true)}>ON</button>
			<br />
			<button className="btn" onClick={() => setLit(false)}>OFF</button>
			<br />
			<button className="btnInc" onClick={() => setTemp(++currTemp)}> + </button>
			<button className="btnDec" onClick={() => setTemp(--currTemp)}> - </button>
		</div>
	);
}