import React from 'react';
import ReactDom from 'react-dom';
import { Room } from './Room.js';
import { RedditApi } from './RedditApi.js';
import "./index.css";


function RoomAndApi (){
	return (
		<div>
			<Room roomNum="1" floor="2"/>
			<RedditApi/>
		</div>
	);	
}

ReactDom.render(<RoomAndApi />, document.querySelector('#root'));
