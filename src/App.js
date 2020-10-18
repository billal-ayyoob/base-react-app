import React from 'react';
import './App.css';

class MyComponent extends React.Component{
	render(){
		return(
			<React.Fragment>
				<h1>Hello from VLT Team</h1>
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
