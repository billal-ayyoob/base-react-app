import React from 'react';
import logo from './logo.svg';
import './App.css';

class MyComponent extends React.Component{
	render(){
		return(
			<React.Fragment>
				<h1>Hello from VLT team</h1>
			</React.Fragment>
		)	
	}
}

function App() {
  return (
    <MyComponent/>
  );
}

export default App;
