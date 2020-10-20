import React, { useState } from 'react';
import ReactDom from 'react-dom';
import { Room } from './Room.js';
import axios from 'axios';
import "./index.css";

function Reddit() {
	const [posts, setPosts] = useState([]);
	React.useEffect(() =>{
		axios.get(`https://www.reddit.com/r/reactjs.json`)
		.then(res =>{
			const newPosts = res.data.data.children
				.map(obj => obj.data);
			setPosts(newPosts);
		});
	}, []);

	return (
		<div>
			<Room roomNum="1" floor="2"/>
			<h1>/r/reactjs</h1>
			<ul>
				{posts.map(post => (
					<li key={post.id}>{post.title} <span className="redditScore">Socre: {post.score}</span></li>
				))}
			</ul>
		</div>
	);
}
ReactDom.render(<Reddit />, document.querySelector('#root'));
