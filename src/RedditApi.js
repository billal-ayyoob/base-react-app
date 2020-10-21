import React, { useState } from 'react';
import axios from 'axios';

export function RedditApi() {
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
			<h1>/r/reactjs</h1>
			<ul>
				{posts.map(post => (
					<li key={post.id}>{post.title} <span className="redditScore">Socre: {post.score}</span></li>
				))}
			</ul>
		</div>
	);
}