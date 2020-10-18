import React from 'react';
import './App.css';

class MyComponent extends React.Component{
	render(){
		return(
			<React.Fragment>
				<h1>Hello World</h1>
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
